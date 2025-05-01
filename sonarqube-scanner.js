/*const scanner = require('sonarqube-scanner');
const { program } = require('commander');
program
  .option('-t, --token <token>', 'SonarQube token')
  .parse(process.argv);

console.log("test token command: " + JSON.stringify(program._optionValues));

const scannerConfig = {
    serverUrl: "http://localhost:9000",
    token: program._optionValues.token,
    options: {
      "sonar.sources": "./src",
      "sonar.coverage.exclusions": "src/**",
      "sonar.exclusions": "src/polyfills.ts"
    },
  };

scanner.scan(scannerConfig, () => process.exit());*/

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const scanner = require('sonarqube-scanner');
import { program } from 'commander';

program
  .option('-t, --token <token>', 'SonarQube token')
  .option('-h, --host <host>', 'SonarQube server URL')
  .parse(process.argv);

console.log("test params command: " + JSON.stringify(program.opts()));

const options = program.opts();
console.log("Token:", options.token);
console.log("Host:", options.host);

const scannerConfig = {
  serverUrl: options.host,
  token: options.token,
  options: {
    "sonar.sources": "./src",
    "sonar.exclusions": "src/polyfills.ts",
  },
};

scanner.scan(scannerConfig, () => process.exit());
