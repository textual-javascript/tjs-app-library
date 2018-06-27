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
	  else if(typeNum1 === false){
		  num2 = parseInt(command)
		  doOperation = true
		  printOut("Now, type +, -, * or /")
		  typeNum1 = 0
	  }
	  else if(doOperation === true){
		  if(command === "+"){
			  result = num1 + num2
			  doOperation = false
			  printOut(result.toString())
		  }
	  }
	}
})