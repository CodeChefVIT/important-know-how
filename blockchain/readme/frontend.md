## Front end using web3.js
___

<br />

```bash
$ npm install ethereum/web3.js
```

<br />

* Go to online remix IDE 
* Change the run environment from EVM to web3 provider
* Run the code



<br />
<br />


```html
<script src = "./node_modules/web3/dist/web3.min.js"></script>
```

<br />

```html

<script>

    //To set up a provider
    if(typeof web3 !== 'undefined'){
        web3 = new Web3(web3.currentProvider);
    } else{
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    //To set up a default account

    //testrpc provides us with 10 accounts, We are using the first one
    web3.eth.defaultAccount = web3.eth.accounts[0];

    /* To initialize or create a contract on a method
        It takes a parameter called ABI or application binary interface
        which allows to call functions and receive data from the contract.
        
        GO TO COMPILE DETAILS IN THE REMIX IDE AND COPY THE ABI*/

    var mycontract = web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fname",
				"type": "string"
			},
			{
				"name": "_age",
				"type": "uint256"
			}
		],
		"name": "setInstructor",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getInstructor",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);

// To set the location of the contract
var contract = mycontract.at("0xfb3dbcb0efb1f71c15231cc395323d04e2e1cd42");

</script>

```