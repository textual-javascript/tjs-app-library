var todos= [];
var command = $("input[type='text']").val();
printOut("Welcome to my todo-list app! Type help, if you don't know commands.");

if(event.which === 13){
  logCommand();
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
  else if(command === "close"){
	printOut("Thank you, for using my app!");
	// Here I want to stop the whole script...
  }
  else{
	printOut("Invalid command. If you don't know commands, type help.", "failure");
  }
  printOut("Type command."); 
}

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
	var newTodo = printOut("Type thing you want to add.");
	todos.push(" " + newTodo);
	printOut("Item added successfully", "success");
}

function deleteTodo(){
	var index = printOut("What item do you want to remove? (Type its index)");
	todos.splice(index, 1)
	printOut("Item removed successfully");
}

function viewCommands(){
	alert("Here's a full list of commands.");
	alert("new- adds new item to the list.");
	alert("list- views list of things to do.");
	alert("delete- deletes item from the list.");
	alert("help- shows list of commands.");
	alert("close- closes the application");
}
