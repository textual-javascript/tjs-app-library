var todos= []

if(event.which === 13){
   logCommand();
}
  
while(command !== "close"){
  
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
	printOut("Invalid command. If you don't know commands, type help.", "failure");
  }
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
	printOut("Here's a full list of commands.");
	printOut("new- adds new item to the list.");
	printOut("list- views list of things to do.");
	printOut("delete- deletes item from the list.");
	printOut("help- shows list of commands.");
	printOut("close- closes the application");
}