var num1 = 0
var num2 = 0
var result = 0
var operation = ""
var typeNum1 = true
var doOperation = false

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
		  doOperation = true
		  printOut("Now, press +, -, * or / on numpad.")
	  }
	}
	else if(event.which === 107){
		if(doOperation === true){
			result = num1 + num2
			printOut(result.toString())
		}
	}
	else if(event.which === 109){
		if(doOperation === true){
			result = num1 - num2
			printOut(result.toString())
		}
	}
	else if(event.which === 106){
		if(doOperation === true){
			result = num1 * num2
			printOut(result.toString())
		}
	}
	else if(event.which === 111){
		if(doOperation === true){
			result = num1 / num2
			printOut(result.toString())
		}
	}
})