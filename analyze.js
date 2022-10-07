function analyze(input) {
    var key , Savings,Account,Currents,minor,minorWParents,minimumBalance,documents,required;//Savings,Accounts,Currents,minor, minor with parents, minimum balance, documents, needed/required
    
        Savings = savings(input);
        Account = accounts(input);
        minimumBalance = minimumbalance(input);
        key = Savings + Account + minimumBalance;
        key =  key.padEnd(5,"0");
    return key;
    
}
function savings(input) {
    if(input.search("Savings") != null){
        return "1";
    }else{
        return "0";
    }
}
function accounts(input) {
    if(input.search("accounts") != null){
        return "1";
    }
}
function minimumbalance(input) {
    if(input.search("minimum balance") != null){
        return "1";
    }else{
        return "0";
    }
}