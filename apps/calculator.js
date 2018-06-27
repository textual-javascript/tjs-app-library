var num1 = 0
var num2 = 0
var result = 0
var operation = ""
var typeNum1 = true
var typeOperation = false

printOut("Welcome to calculator app! Type first number.")
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
	  if(typeNum1 === true){
		  num1 = parseInt(command)
		  typeNum1 = false
		  printOut("Type second number.")
	  }
	  else if (typeNum1 === false){
		  num2 = parseInt(command)
		  typeOperation = true
		  printOut("Type operation sign (+, -, * or /)")
	  }
	  else if(typeOperation === true){
		  if(command === "+"){
			  result = num1 + num2
			  printOut("The result is: " + result)
			  typeOperation = false
		  }
		  else if (command === "-"){
			  result = num1 - num2
			  printOut("The result is: " + result)
			  typeOperation = false
		  }
		  else if (command === "*"){
			  result = num1 * num2
			  printOut("The result is: " + result)
			  typeOperation = false
		  }
		  else if (command === "/"){
			  result = num1 / num2
			  printOut("The result is: " + result)
			  typeOperation = false
		  }
		  else{
			  printOut("Invalid sign!")
		  }
	  }
	}
})