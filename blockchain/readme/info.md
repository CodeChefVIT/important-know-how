## Solidity and smart contracts
___

<br />

### Run locally
___



<br />

```bash
$ npm install -g ethereumjs-testrpc
$ npm init
$ npm install solc --save
```

<br />

After installing ethereumjs-testrpc run-

<br />

```bash
$ testrpc
```

<br />

It will start listening on localhost


<br />
<br />




```javascript
// index.js

const fs = require('fs'); // Built-in dependency for file streaming.
const solc = require('solc'); // Our Solidity compiler

const input = fs.readFileSync('HelloWorld.sol'); // Read the file...
const output = solc.compile(input.toString(), 1); // ...and compile it!

console.log(output); // Log the result
```

<br />
<br />


[documentation](https://www.ludu.co/course/ethereum/running-dapps-locally)