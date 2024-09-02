const { exec } = require('child_process');
const util = require('util');

const execPromise = util.promisify(exec);

async function runCommands() {
  try {
    console.log('Generating keys...');
    const { stdout: stdout1, stderr: stderr1 } = await execPromise('npx passport-scope generate-keys --name my_key');
    console.log('stdout:', stdout1);
    if (stderr1) console.error('stderr:', stderr1);

    console.log('Creating scope...');
    const network = 'testnet'
    const { stdout: stdout2, stderr: stderr2 } = await execPromise(`npx passport-scope create --config-path ./scripts/scope_config.json --private-key ./my_key_priv.der --network ${network} --verbose`);
    console.log('stdout:', stdout2);
    if (stderr2) console.error('stderr:', stderr2);
  } catch (error) {
    console.error('Error executing commands:', error);
  }
}

const main = () => {
  runCommands()
}

main()
