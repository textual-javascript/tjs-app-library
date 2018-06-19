var input = $("input[type='text']")
var command = ""
var instructions = ["Alright, rules are very simple.", "You have to pick number from 1 to 48, to shoot.", "In the meantime, computer also picks number from the same range.", "If difference between computer's number, and your number is greater than 2, you score goal.", "But if not, then goalkeeper saves your shot.", "Computer's takes penalties in the exact same way, as you do.", "The first one to score 10 points, wins!"]

printOut("Welcome to penalty shootout! Type start, to play...")
input.keypress(function(event){
	if(event.which === 13){
		command = input.val();
		if(command === "start"){
			var printRules = setInterval(explainRules, 2000)
		}
	}
})
	
function explainRules(){
	var index = 0
	var repeats = 0
	  printOut(instructions[index]);
      index++	
	  repeats++	
	  if(repeats === 7){
		  clearInterval(printRules);
	  }
}