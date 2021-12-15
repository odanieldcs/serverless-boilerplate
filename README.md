# Serverless Boilerplate to API Node.js

[![Coverage Status](https://coveralls.io/repos/github/odanieldcs/serverless-boilerplate/badge.svg)](https://coveralls.io/github/odanieldcs/serverless-boilerplate)
[![MIT Licensed](https://img.shields.io/badge/license-MIT-green.svg)](https://tldrlegal.com/license/mit-license)

This project has been created using the `typescript`, `webpack`, `serverless-offline` and more to make a great boilerplate from serverless apps Node.js.

> **Requirements**: NodeJS `lts/fermium (v.14.x)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

### Features

- ESLint and Prettier to check and maintain code quality
- Integration tests with Jest.
- GitHub Actions for run tests and collect coverage.
- GitHub Actions for deploy to AWS.

### Using NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS

### Development enviroment

- Run `serverless offline --httpPort 8001` to emulate.
- The application will start on [http://localhost:8001/](http://localhost:8001/)

### 3rd party libraries

- [@serverless/typescript](https://github.com/serverless/typescript) - provides up-to-date TypeScript definitions for your `serverless.ts` service file
- [serverless-offline](https://github.com/dherault/serverless-offline) - plugin emulate [AWS λ](https://aws.amazon.com/lambda) and [API Gateway](https://aws.amazon.com/api-gateway).
