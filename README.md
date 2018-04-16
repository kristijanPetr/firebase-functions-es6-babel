# firebase-functions-es6-babel

Write ES6 syntax for Firebase Functions
ability to use async/await

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Before cloning the repo init project folder with

`$ firebase init functions`

### Installing

Clone this repo and run

`$ npm install`

Just once run
`$ npm run prebuild:clean`
to create /functions folder where Babel will transpile ES6 code.

## Deployment

Inside /src/index.js there is dummy function for testing purpose.

To Deploy functions run
`$ npm run deploy`
