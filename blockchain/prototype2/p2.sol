pragma solidity ^0.4.18;

contract mycontract{
    uint age;
    string name;
    
    event Instructor(
        string fname,
        uint fage
    );
    
    function setInstructor(string _fname,uint _fage) public { 
        name = _fname;
        age = _fage;
        emit Instructor(fname,fage);
    }
    
    function getInstructor() public constant returns (string,uint){
        return(name,age);
    }
}