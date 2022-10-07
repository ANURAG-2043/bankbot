function getBotResponse(input) {
    var key, choices, responses ;
    var key , Savings,Account,Currents,minor,minorWParents,minimumBalance,documents,required;//Savings,Accounts,Currents,minor, minor with parents, minimum balance, documents, needed/required
    key = analyze( input );
    switch (key) {
        
        case "10000":{
            responses = key;
            responses = "there are two types of Accounts: Savings and Currents";
            break;
        }
        
        case "11100":{   
            responses = key ;
            responses = "Minimum balance required for Savings account is Rs. 2000"   ;   
            break;
        }
            
        default: 
        responses =  "didnt";
            break;
    }
    return responses;
    /*if(input.search("Savings") != null){
        Savings = "1";
    }
    if(input.search("accounts") != null){
        Account = "1";
    }
    if(input.search("minimum balance") != null){
        minimumBalance = "1";
    }
    if (input.search("accounts") != null) {
        responses = "there are two types of Accounts: Savings and Currents";
    }else if (Account == "1" || Savings == "1" || minimumBalance == "1") {
        responses = "Minimum balance required for Savings account is Rs. 2000"   ;
    }else if (Account == "1" || Savings == "1" || documents == "1") {
        responses = "docs"   ;
    }else{
        return 0;
    }*/
    

    // Greetings
    if (input == "hello" || input == "hi") {
        return "Hello there!";
    } else if (input == "goodbye" || input == "bye" || input == "see you later" || input == "see yo soon") {
        return "Talk to you later!";
    } else if (input == "thank you") {
        return "You're Welcome!";
    }else if (input == "how are you?") {
        return "I'm fine! \n How are you?";
    }else if (input == "I'm fine" || input == "I'm good" ) {
        return "So, how may i help you today?";
    } else {
        return "Try asking something else!";
    } 
}
