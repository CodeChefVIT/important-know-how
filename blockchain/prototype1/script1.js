if(typeof web3 !== 'undefined'){
    web3 = new Web3(web3.currentProvider);
} else{
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];

// got contract data through compilation details

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
])

// got address from runtime details

var contract = mycontract.at("0xbb2713515a26c7e5e0e9251ab0e7bd4a331066ac");



$("#button").on("click",(e)=>{
    e.preventDefault();
    contract.setInstructor($("#name").val(),$("#age").val());
});


contract.getInstructor((err,result)=>{
    if(err)
        return console.log(err);
        console.log(result)
    $("#instructor").html(`${result[0]} is ${result[1]} years old`);
})