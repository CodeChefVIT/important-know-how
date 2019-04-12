if(typeof web3 !== 'undefined'){
    web3 = new Web3(web3.currentProvider)
} else{
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];

var contractData = web3.eth.contract([
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "fname",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "fage",
				"type": "uint256"
			}
		],
		"name": "Instructor",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fname",
				"type": "string"
			},
			{
				"name": "_fage",
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

var contract = contractData.at('0xe71567179403440503e7e838164d8938c6399885');



$("button").on("click",(e)=>{
    e.preventDefault();
    contract.setInstructor($("#name").val(),$("#age").val());
});


// Event listener will get fired once setInstructor sets the values
var eventListener = contract.Instructor();

eventListener.watch((err,result)=>{
    if(!err){
        $("#output").html(`${result.args.fname} is ${result.args.fage} years old`)
    } else{
        console.log("error"); 
    }
})