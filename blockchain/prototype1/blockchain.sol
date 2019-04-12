pragma solidity ^0.4.10;

contract mycontract{
    
    // string public uname = "Angad";
    // bool public student = true;
    
    // //unsigned integer
    // uint public age = 19;
    
    string public uname;
    bool public student;
    string constant surname = "Sharma";
    
    //unsigned integer
    uint public age ;
    
    //  constructor like this is deprecated
    // function mycontract() public  {
    //     uname = "Angad";
    //     student = true;
    //     age = 19;
    // }

    constructor() public {
        uname = "Angad";
        student = true;
        age = 19;
    }
    
    
}
