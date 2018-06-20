var userNum = 0
var compNum = 0
var userScore = 0
var compScore = 0
var waitForOk = false
var canTypeMultipleNumbers = false
var isCompStriker = false
var isUserStriker = true
var userGlkprNums = []
var compGlkprNums = []
var instructions = ["Alright, rules are very simple.", "You have to pick number from 1 to 48, to shoot.", "In the meantime, computer picks 10 numbers from the same range.", "If your number isn't on computer's list, you score goal.", "But if it's on the list, then goalkeeper saves your shot.", "Computer takes penalties in the exact same way, as you do.","You also try to save computer's shot, by picking 10 numbers.","The first one to score 10 points, wins!", "Type ok, when you'll be ready to play."]

printOut("Welcome to penalty shootout text game! Type start.")
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		if(command === "start"){
			printHelp();
		}
		else if(command === "ok" && waitForOk === true){
            actualGame();
        }
	}
})
	
function printHelp(){
  for(var i = 0; i < 9; i++){
	  printOut(instructions[i])
	  waitForOk = true
  }
}

function actualGame(){
   printOut("Ok then, let's go!");
   waitForOk = false
   while(userScore < 10 || compScore < 10){
     if(isUserStriker === true){
	   printOut("It's your time to shoot!");
	   printOut("Pick number from 1 to 48...");
	   $("input[type='text']").keypress(function(event){
		 if(event.which === 13){
          userNum = parseInt(command)
	      if(userNum !== NaN){
		   if(userNum >= 1 && userNum <= 49){
			  printOut("Computer picked these numbers:")
			  for(var i = 0; i <= 10; i++){
			    compNum = randomNum(1, 48);
			    if($.inArray(compNum, compGlkprNums) === -1){
			      compGlkprNums.push(compNum)
                  printOut(compGlkprNums[i])				  
			    }
		     }			 
             if($.inArray(userNum, compGlkprNums === -1)){
			   printOut("YOU SCORED A GOAL!", "success")
               userScore++
               printOut("It's " + userScore + ":" + compScore + ".")			
		     }
             else{
			  printOut("YOUR SHOT WAS SAVED!", "failure")
              printOut("It's " + userScore + ":" + compScore + ".")		
		     }
             isUserStriker = false
             isCompStriker = true	
		  }
          else{
			  printOut("YOUR NUMBER IS INVALID!", "failure")
		  }		  
	   }
	   else{
		 printOut("YOU MUST TYPE NUMBERS ONLY!", "failure")
	   }	
	  } 
	 })
    }
    else{
	  canTypeMultipleNumbers = true
	  printOut("It's computer's time to shoot!");
	  compNum = randomNum(1, 48)
	  printOut("Computer picked number, now you have to pick 10 numbers.")
	  input.keypress(function(event){
		 userNum = parseInt(command)
		 while(userGlkprNums.length <= 10 && canTypeMultipleNumbers === true){
		   if(userNum !== NaN){
			 if(userNum >= 1 && userNum <= 49){
			   if($.inArray(userNum, userGlkprNums) === -1){
				 userGlkprNums.push(userGlkprNums)  
			   }
			   else{
				 printOut("YOU HAVE ALREADY TYPED THAT NUMBER!", "failure");
			   }
			 }
             else{
			   printOut("THIS NUMBER IS INVALID", "failure")
			 }			 
		   }
           else{
			 printOut("YOU MUST TYPE NUMBERS ONLY!", "failure")
		   }		   
		 }
		 if(userGlkprNums.length === 10){
			 canTypeMultipleNumbers = false
			 printOut("Computer picked: " + compNum)
			 if($.inArray(compNum, userGlkprNums) === -1){
				 printOut("COMPUTER SCORED GOAL!", "failure")
				 printOut("It's " + userScore + ":" + compScore + ".")
			 }
			 else{
			   printOut("YOU SAVED SHOT!", "success")
			   printOut("It's " + userScore + ":" + compScore + ".") 
			 }
			 isUserStriker = true
             isCompStriker = false	
		 }
	  })
	}	
  }	   
}