# firebase-functions-es6-babel

Write ES6 syntax for Firebase Functions
ability to use async/await

## Getting Started

While Firebase still uses Node v6 , async/await is not available for usage. So I made this repo to transpile ES6 to ES5.

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
