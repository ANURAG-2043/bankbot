/*function getBotResponse(input) {
    var responses ;
    //dont know dont care dont ask if it works it works!!! if it doesnt fuck off!!!
    if (((input.search("accounts") != -1) || (input.search("account") != -1) )&& (input.search("savings") == -1) && (input.search("current") == -1)) {
        responses = "there are two types of Accounts: Savings and Current";
    }else if ( ((input.search("accounts") != -1) || (input.search("account") != -1) ) && (input.search("savings") != -1) && (input.search("minimum balance") != -1)) {
        responses = "Minimum balance required for Savings account is Rs. 2000"   ;
    }else if (((input.search("accounts") != -1) || (input.search("account") != -1) ) && (input.search("savings") != -1) && (input.search("documents") != -1)) {
        responses = "1. Aadhar card \n 2. Pan card \n3. Electricity bill \n 4. passport sized photo"   ;
    }else if (((input.search("accounts") != -1) || (input.search("account") != -1) ) && (input.search("savings") != -1) && (input.search("documents") != -1)  && (input.search("minor") != -1)) {
        responses = "1. birth certificate \n 2. leaving caetificate \n3. Pan card if age above 12 \n 4. passport sized photo"   ;
    }else if (((input.search("accounts") != -1) || (input.search("account") != -1) ) && (input.search("savings") != -1) && (input.search("documents") != -1)  && (input.search("minor with parent") != -1)) {
        responses = "1. birth certificate \n 2. leaving caetificate \n3. Pan card if age above 12 \n 4. passport sized photo \n5.Parent's pan card\n 6.parent's aadhar card \n Note: It will be handled by the parent";
    }else if (((input.search("accounts") != -1) || (input.search("account") != -1) )&& (input.search("savings") != -1) && (input.search("minimum balance") == -1)) {
        responses = "there are three types of Savings Accounts: \n 1.Savings \n2. Minor with parent \n3. Minor only ";
     }else if (((input.search("accounts") != -1) || (input.search("account") != -1)) && (input.search("current") != -1) && (input.search("savings") == -1)) {
        responses = "there are four types of Accounts: \n 1.proprietorship \n 2.partnership \n 3.private ltd.\n 4.public ltd ";
    }//else if (((input.search("accounts") != -1) || (input.search("account") != -1) ) && (input.search("current") != -1) && (input.search("documents") != -1)  && (input.search("proprietorship") != -1)) {
        //responses = "1. birth certificate \n 2. leaving caetificate \n3. Pan card if age above 12 \n 4. passport sized photo"   ;
    //}
    else{
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
    
    return responses;

    
}*/
function getBotResponse(input) {
    var responses ;
    //dont know dont care dont ask if it works it works!!! if it doesnt fuck off!!!
    if (((input.search("accounts") != -1) || (input.search("account") != -1) )&& ((input.search("savings") == -1)||(input.search("saving") == -1)) && (input.search("current") == -1)) {
        responses = "there are two types of Accounts: Savings and Current";
     }else if (((input.search("accounts") != -1) || (input.search("account") != -1))&&(input.search("savings") != -1)||(input.search("saving") != -1)) {
         responses = "What do you want to know about the saving account:\n 1.How to create a saving account.\n2.minimum balance reqired in the saving account.\n 3.Documents required for opening Saving Account. \n4.Saving Account for minor. \n5.Saving Account for minor with parent " ;
    }else if ( (input.search("saving") == -1)&&((input.search("accounts") != -1) || (input.search("account") != -1) )) {
        responses = "What do you want to know about the saving account:\n 1.How to create a saving account.\n2.minimum balance reqired in the saving account.\n 3.Documents required for opening Saving Account. \n4.Saving Account for minor. \n5.Saving Account for minor with parent " ;
    }else if ( ((input.search("accounts") != -1) || (input.search("account") != -1) ) && (input.search("savings") != -1) && ((input.search("minimum balance") != -1)||(input.search("min balance") != -1)||(input.search("balance required") != -1)||(input.search("min available balance") != -1)||(input.search("minimum available balance") != -1)||(input.search("minimum balance required") != -1)||(input.search("min balance required") != -1))) {
        responses = "Minimum balance required for Savings account is Rs. 2000"   ;
    }else if (((input.search("accounts") != -1) || (input.search("account") != -1) ) && ((input.search("savings") != -1)||(input.search("saving") != -1)) && (input.search("documents") != -1)|| (input.search("document") != -1)||(input.search("documents required") != -1)||(input.search("documents for opening saving account") != -1)||(input.search("opening saving account documents") != -1)) {
        responses = "1. Aadhar card \n 2. Pan card \n3. Electricity bill \n 4. passport sized photo"   ;
    }else if (((input.search("accounts") != -1) || (input.search("account") != -1) ) && ((input.search("savings") != -1)||(input.search("saving") != -1) )&& (input.search("documents") != -1)  && (input.search("minor") != -1)) {
        responses = "1. birth certificate \n 2. leaving caetificate \n3. Pan card if age above 12 \n 4. passport sized photo"   ;
    }else if (((input.search("accounts") != -1) || (input.search("account") != -1) ) && ((input.search("savings") != -1)||(input.search("saving") != -1)) && (input.search("documents") != -1)  && (input.search("minor with parent") != -1)) {
        responses = "1. birth certificate \n 2. leaving caetificate \n3. Pan card if age above 12 \n 4. passport sized photo \n5.Parent's pan card\n 6.parent's aadhar card \n Note: It will be handled by the parent";
    }else if (((input.search("accounts") != -1) || (input.search("account") != -1) )&& ((input.search("savings") != -1)||(input.search("saving") != -1)) && (input.search("minimum balance") == -1)||(input.search("min balance") != -1)||(input.search("balance required") != -1)||(input.search("min available balance") != -1)||(input.search("minimum available balance") != -1)||(input.search("minimum balance required") != -1)||(input.search("min balance required") != -1)) {
        responses = "there are three types of Savings Accounts: \n 1.Savings \n2. Minor with parent \n3. Minor only ";
    }else if (((input.search("accounts") != -1) || (input.search("account") != -1)) && (input.search("current") != -1) && (input.search("savings") == -1)) {
        responses = "there are four types of Accounts: \n 1.proprietorship \n 2.partnership \n 3.private ltd.\n 4.public ltd ";
    }
    
    //else if (((input.search("accounts") != -1) || (input.search("account") != -1) ) && (input.search("current") != -1) && (input.search("documents") != -1)  && (input.search("proprietorship") != -1)) {
        //responses = "1. birth certificate \n 2. leaving caetificate \n3. Pan card if age above 12 \n 4. passport sized photo"   ;
    //}
    else{
        // Greetings
    if (input == "hello" || input == "hi"||input =="hii"||input == "Hello" || input == "Hi"||input =="Hii") {
        return "Hello there!";
    } else if (input == "goodbye" || input == "bye" || input == "see you later" || input == "see yo soon"||input == "Goodbye" || input == "Bye" || input == "Byee") {
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
    
    return responses;

    
}