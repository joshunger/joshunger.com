// curl -o- -L https://raw.githubusercontent.com/joshunger/joshunger.com/master/create-issue.js | node

const os = require('os');

const execSyncRaw = require('child_process').execSync;
const execSync = (command) => new String(execSyncRaw(command)).trim();

const npmVersion = execSync('npm -v');
const webpackVersion = execSync('./node_modules/.bin/webpack -v');
const webpackServe = execSync('bash ./node_modules/.bin/webpack-serve --version || echo "n/a"');

const template = `
* Operating System: ${os.type()} ${os.release()}
* Node Version: ${process.versions.node}
* NPM Version ${npmVersion}
* webpack Version ${webpackVersion}
* webpack-server Version ${webpackServe}
`;

console.log(template);