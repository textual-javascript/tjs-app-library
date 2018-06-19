var instructions = ["Alright, rules are very simple.", "You have to pick number from 1 to 48, to shoot.", "In the meantime, computer also picks number from the same range.", "If difference between computer's number, and your number is greater than 2, you score goal.", "But if not, then goalkeeper saves your shot.", "Computer's takes penalties in the exact same way, as you do.", "The first one to score 10 points, wins!", "Type ok, when you'll be ready"]
console.log(instructions.length);
printOut("Welcome to penalty shootout! Type start.")
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		if(command === "start"){
			game()
		}
	}
})
	
function game(){
  for(var i = 0; i < instructions.length; i++){
	  printOut(instructions[i])
  }
  if(command === "ok"){
	  printOut("Ok then, let's go!");
  }
}