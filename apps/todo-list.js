var todos = [];
var input = $("input[type='text']");

printOut("Welcome to my todo-list app! If you don't know commands, type help.")

input.keypress(function(event){
	if(command == "new"){
	  var newTodo = printOut("Type thing you want to add.");
	  todos.push(" " + newTodo);
	  printOut("Item added successfully");
	}
})