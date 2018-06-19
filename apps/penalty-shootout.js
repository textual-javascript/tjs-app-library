var input = $("input[type='text']")
var command = input.val();
var instructions = ["Alright, rules are very simple.", "You have to pick number from 1 to 48, to shoot.", "In the meantime, computer also picks number from the same range.", "If difference between computer's number, and your number is greater than 2, you score goal.", "But if not, then goalkeeper saves your shot.", "Computer's takes penalties in the exact same way, as you do.", "The first one to score 10 points, wins!", "Press y, to play."]

printOut("Welcome to penalty shootout! Type start.")
input.keypress(function(event){
	if(event.which === 13){
		if(command === "start"){
			explainRules()
		}
	}
})
	
function explainRules(){
  for(var i = 0; i < instructions.length - 1; i++){
	  printOut(instructions[i])
  }
}