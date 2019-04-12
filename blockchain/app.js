const fs = require("fs");
const solc = require("solc");

const input = fs.readFileSync("2.sol");
const output = solc.compile(input.toString(),1);

console.log(output);