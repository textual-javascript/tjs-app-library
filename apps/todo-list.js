var todos = [];
var forbiddenTodos = ["new", "list", "delete", "help", "close"];
var canAddItems = true;
var canRemoveItems = true;
var canShowItems = true;
var canShowCommands = true;
var canStopApp = true;
var stopExec = true;
var input = $("input[type='text']");

printOut("Welcome to my todo-list app! If you don't know commands, type help.")

input.keypress(function(event){
 if(event.which === 13 && stopExec === false){
  
  if(command === "list" && canShowItems === true){
     listTodos();
  }

  else if(command === "new" && canAddItems === true){
     addTodo();
  }
  
  else if(command === "delete" && canRemoveItems == true){
	 deleteTodo();
  }
  
  else if(command === "help" && canShowCommands == true){
     viewCommands();
  }
 
  else if(command === "close" && canStopApp = true){
	 closeApp(); 
  }
 }
});

function listTodos(){
  canAddItems = false
  canRemoveItems = false
  canShowCommands = false
  canStopApp = false
  if(todos.length !== 0){
	printOut("Here are your things to do:")
	todos.forEach(function(todo, i){
    printOut(i + ": " + todo);  
  });
}
  else if(todos.length === 0){
	printOut("Your list is empty!") 	
  }
  printOut("Type command");
  canAddItems = true
  canShowItems = true
  canRemoveItems = true
  canShowCommands = true
  canStopApp = true
}

function addTodo(){
	canShowItems = false
    canRemoveItems = false
    canShowCommands = false
    canStopApp = false
    printOut("Type thing you want to add.");
	canAddItems = true;
	input.keypress(function(event){
     if(event.which === 13){
		var newTodo = command
	    todos.push(" " + newTodo);
	    printOut("Item added successfully");
	 }		  
	 canAddItems = true
     canShowItems = true
     canRemoveItems = true
     canShowCommands = true
     canStopApp = true
  })
}
 
function deleteTodo(){
    canShowItems = false
    canAddItems = false
    canShowCommands = false
    canStopApp = false
	printOut("What item do you want to remove? (Type its index)");
	canRemoveItems = true
	input.keypress(function(event){
	if(event.which === 13){
	  canRemoveItems = false
      var index = command
	  todos.splice(index, 1)
	  printOut("Item removed successfully");
	}
  })
  	 canAddItems = true
     canShowItems = true
     canRemoveItems = true
     canShowCommands = true
     canStopApp = true
}

function viewCommands(){
	  canShowItems = false
      canAddItems = false
      canRemoveItems = false
      canStopApp = false
	  printOut("Here's a full list of commands:");
	  printOut("new - adds new item to the list.");
	  printOut("list - views list of things to do.");
	  printOut("delete - deletes item from the list.");
	  printOut("help - shows list of commands.");
	  printOut("close - closes the application");
  	  canAddItems = true
      canShowItems = true
      canRemoveItems = true
      canShowCommands = true
      canStopApp = true	  
}

function closeApp(){
	 printOut("APP WAS CLOSED", "success")
     stopExec = true
}