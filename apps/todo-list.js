var todos = [];
var canAddItems = false;
var canRemoveItems = false;
var canShowItems = false;
var canShowCommands = false
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
 
  else if(command === "close"){
     process.exit(0);
  }
}
});

function listTodos(){
   canShowItems = true
   if(todos.length !== 0 && canShowItems === true){
	printOut("Here are your things to do:")
	todos.forEach(function(todo, i){
    printOut(i + ": " + todo);  
  });
    canShowItems = false
}
  else if(todos.length === 0 && canShowItems === true){
	printOut("Your list is empty!") 
    canShowItems = false	
  }
}

function addTodo(){
    printOut("Type thing you want to add.");
	canAddItems = true;
	input.keypress(function(event){
     if(event.which === 13 && canAddItems === true){
      var newTodo = command
	  todos.push(" " + newTodo);
	  printOut("Item added successfully");
      canAddItems = false	  
	}
  })
}
 
function deleteTodo(){
	printOut("What item do you want to remove? (Type its index)");
	canRemoveItems = true
	input.keypress(function(event){
	if(event.which === 13 && canRemoveItems == true){
      var index = command
	  todos.splice(index, 1)
	  printOut("Item removed successfully");
	  canRemoveItems = false
	}
  })
}

function viewCommands(){
	canShowCommands = true
	if(canShowCommands === true){
	  printOut("Here's a full list of commands:");
	  printOut("new - adds new item to the list.");
	  printOut("list - views list of things to do.");
	  printOut("delete - deletes item from the list.");
	  printOut("help - shows list of commands.");
	  printOut("close - closes the application");
      canShowCommands = false	  
	}
}