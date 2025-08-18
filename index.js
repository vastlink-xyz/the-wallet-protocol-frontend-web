import dotenv from 'dotenv';
import { Uploader } from "@irys/upload";
import { Ethereum } from "@irys/upload-ethereum";

dotenv.config();

const getIrysUploader = async () => {
  const irysUploader = await Uploader(Ethereum).withWallet(process.env.PRIVATE_KEY);
  return irysUploader;
};

// Store user data with searchable tags
const storeUserData = async (userData) => {
  const irysUploader = await getIrysUploader();
  
  const tags = [
    { name: "Content-Type", value: "application/json" },
    { name: "App-Name", value: "UserStorage" },
    { name: "Data-Type", value: "user" },
    { name: "User-ID", value: userData.userid.toString() },
    { name: "User-Name", value: userData.name },
    { name: "User-Age", value: userData.age.toString() }
  ];
  
  try {
    const receipt = await irysUploader.upload(JSON.stringify(userData), { tags });
    console.log(`User data uploaded ==> https://gateway.irys.xyz/${receipt.id}`);
    console.log(`User: ${userData.name} (ID: ${userData.userid})`);
    return receipt.id;
  } catch (e) {
    console.log("User data upload error", e);
  }
};

// Query user data by userid
const queryUserByID = async (userid) => {
  try {
    const query = `
      query {
        transactions(
          tags: [
            { name: "App-Name", values: ["UserStorage"] },
            { name: "Data-Type", values: ["user"] },
            { name: "User-ID", values: ["${userid}"] }
          ]
          first: 10
        ) {
          edges {
            node {
              id
              tags {
                name
                value
              }
            }
          }
        }
      }
    `;
    
    // Try both Arweave and Irys endpoints
    console.log("Querying Arweave GraphQL...");
    const arweaveResponse = await fetch('https://arweave.net/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    });
    const arweaveResult = await arweaveResponse.json();
    console.log(`Arweave result for ID ${userid}:`, arweaveResult.data?.transactions?.edges || []);
    
    // Also try direct transaction lookup
    console.log("Trying direct transaction access...");
    const testTxIds = ["9FqGPbzQXQvM5sxE1LyJ7UpnGjmuXqbUzu5E9SFStVfc"]; // Bob's transaction
    for (const txId of testTxIds) {
      console.log(`Testing transaction ${txId}:`);
      await downloadUserData(txId);
    }
    
    return arweaveResult;
  } catch (e) {
    console.log("Query by userid error", e);
  }
};

// Query user data by name
const queryUserByName = async (name) => {
  try {
    const query = `
      query {
        transactions(
          tags: [
            { name: "App-Name", values: ["UserStorage"] },
            { name: "Data-Type", values: ["user"] },
            { name: "User-Name", values: ["${name}"] }
          ]
          first: 10
        ) {
          edges {
            node {
              id
              tags {
                name
                value
              }
            }
          }
        }
      }
    `;
    
    const response = await fetch('https://arweave.net/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    });
    
    const result = await response.json();
    console.log(`Found user by name ${name}:`, result.data?.transactions?.edges || []);
    
    // Download and display user data
    if (result.data?.transactions?.edges?.length > 0) {
      const txId = result.data.transactions.edges[0].node.id;
      await downloadUserData(txId);
    }
    
    return result;
  } catch (e) {
    console.log("Query by name error", e);
  }
};

// Download and parse user data
const downloadUserData = async (transactionId) => {
  try {
    const response = await fetch(`https://gateway.irys.xyz/${transactionId}`);
    const jsonData = await response.text();
    const userData = JSON.parse(jsonData);
    console.log(`Downloaded user data:`, userData);
    return userData;
  } catch (e) {
    console.log("Download user data error", e);
  }
};

// Main function to run the example
const main = async () => {
  console.log("=== Irys User Data Storage Example ===\n");
  
  // Example user data
  const users = [
    { userid: 101, name: "Alice", age: 25 },
    { userid: 102, name: "Bob", age: 30 },
    { userid: 103, name: "Charlie", age: 28 }
  ];
  
  // Store user data
  console.log("1. Storing user data...");
  for (const user of users) {
    await storeUserData(user);
  }
  
  // Wait for data to be indexed
  console.log("\nWaiting for data to be indexed...");
  // await new Promise(resolve => setTimeout(resolve, 3000));
  
  // Query by userid with direct GraphQL
  console.log("\n3. Query by User ID (using direct GraphQL)...");
  await queryUserByID("102"); // Query Bob
};

main().catch(console.error);
