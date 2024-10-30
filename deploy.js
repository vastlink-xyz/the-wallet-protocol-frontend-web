const dotenv = require('dotenv');
const { execSync } = require('child_process');
const fs = require('fs');

// Load heroku env vars
const envConfig = dotenv.parse(fs.readFileSync('.env.heroku'));

const APP_NAME = 'the-wallet-protocol-app-poc';

function runCommand(command) {
  const output = execSync(command, { encoding: 'utf8' });
  return output;
}

function escapeValue(value) {
  // Replace single quotes with '\'' and wrap the entire value in single quotes
  return `'${value.replace(/'/g, "'\\''")}'`;
}

function setHerokuConfig() {
  const configString = Object.entries(envConfig)
    .map(([key, value]) => `${key}=${escapeValue(value)}`)
    .join(' ');

  const command = `heroku config:set ${configString} --app ${APP_NAME}`;
  
  console.log(`Setting environment variables...`);
  try {
    const output = execSync(command, { encoding: 'utf-8' });
    console.log('Environment variables set successfully.');
    console.log(output);
  } catch (error) {
    console.error('Error setting environment variables:');
    console.error(error.message);
    throw error;
  }
}

const main = () => {
  // check heroku login status
  runCommand('heroku auth:whoami');
  
  // Check if heroku app exists, if not, create it
  try {
    const appInfo = runCommand(`heroku apps:info --app ${APP_NAME}`);
    if (appInfo) {
      console.log(`Heroku app ${APP_NAME} already exists`);
    } else {
      throw new Error('App not found');
    }
  } catch (error) {
    console.log(`Creating Heroku app: ${APP_NAME}`);
    const createResult = runCommand(`heroku create ${APP_NAME} --team j-labs`);
    if (!createResult) {
      console.error('Failed to create Heroku app. Exiting.');
      process.exit(1);
    }
  }

  // Set heroku env vars
  setHerokuConfig()

  // Deploy the application
  console.log('Deploying application to Heroku...');
  runCommand('git push heroku main');

  // Ensure at least one instance is running
  runCommand(`heroku ps:scale web=1 --app ${APP_NAME}`);
  
  console.log('Deployment complete!');
}
main()
