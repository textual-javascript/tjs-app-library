var waitForOk = false
var isCompStriker = false
var isUserStriker = true
var instructions = ["Alright, rules are very simple.", "You have to pick number from 1 to 48, to shoot.", "In the meantime, computer picks 10 numbers from the same range.", "If your number isn't on computer's list, you score goal.", "But if it's on the list, then goalkeeper saves your shot.", "Computer takes penalties in the exact same way, as you do.","You also try to save computer's shot, by picking 10 numbers.","The first one to score 10 points, wins!", "Type ok, when you'll be ready to play."]

printOut("Welcome to penalty shootout! Type start.")
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
   if(isUserStriker === true){
	  printOut("It's your turn to shoot!");
	  printOut("Pick number from 1 to 48...");
   }
}