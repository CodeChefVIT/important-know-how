pragma solidity ^0.4.18;

contract mycontract {
    
    string fname;
    uint age;

    function setInstructor(string _fname,uint _age) public {
        fname = _fname;
        age = _age;
    }    

    function getInstructor() public constant returns(string,uint){
        return(fname,age);
    }

}