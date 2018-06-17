var todos = [];
var input = $("input[type='text']");

printOut("Welcome to my todo-list app! If you don't know commands, type help.")

input.keypress(function(event){
 if(event.which === 13){
  if(command === "list"){
     listTodos();
  }

  else if(command === "new"){
     addTodo();
  }
  
  else if(command === "delete"){
	 deleteTodo();
  }
  else if(command === "help"){
     viewCommands();
  }
  else{
	 printOut("Invalid command. If you don't know commands, type help.");
  }	 
 }
});

function listTodos(){
   if(todos.length !== 0){
	printOut("Here are your things to do:")
	todos.forEach(function(todo, i){
    printOut(i + ": " + todo);  
 });
}
  else{
	printOut("Your list is empty!")  
 }
}

function addTodo(){
    printOut("Type thing you want to add.");
	input.keypress(function(event){
     if(event.which === 13){
      var newTodo = command
	  todos.push(" " + newTodo);
	  printOut("Item added successfully");	  
	}
  })
}
 
function deleteTodo(){
	printOut("What item do you want to remove? (Type its index)");
	input.keypress(function(event){
	if(event.which === 13){
      var index = command
	  todos.splice(index, 1)
	  printOut("Item removed successfully");
	}
  })
}

function viewCommands(){
	printOut("Here's a full list of commands:");
	printOut("new - adds new item to the list.");
	printOut("list - views list of things to do.");
	printOut("delete - deletes item from the list.");
	printOut("help - shows list of commands.");
	printOut("close - closes the application");
}