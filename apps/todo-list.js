var todos = [];
var input = $("input[type='text']");

printOut("Welcome to my todo-list app! If you don't know commands, type help.")

input.keypress(function(event){
	if(command == "hello"){
		printOut("Hello there!");
	}
})