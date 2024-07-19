const scanner = require('sonarqube-scanner');
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
  
scanner.scan(scannerConfig, () => process.exit());