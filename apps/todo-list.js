var todos = [];
var input = $("command[type='text']");

printOut("Welcome to my todo-list app! If you don't know commands, type help.")

input.keypress(function(event){
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
	printOut("Application was closed.");
 }
 else{
	printOut("Invalid command. If you don't know commands, type help.");
 }
  var command= prompt("Type command.");
} 

function listTodos(){
   if(todos.length !== 0){
	alert("Here are your things to do:")
	todos.forEach(function(todo, i){
    alert(i + ": " + todo);  
 });
}
  else{
	alert("Your list is empty!")  
 }
}

function addTodo(){
	var newTodo= prompt("Type thing you want to add.");
	todos.push(" " + newTodo);
	alert("Item added successfully");
}

function deleteTodo(){
	var index= prompt("What item do you want to remove? (Type its index)");
	todos.splice(index, 1)
	alert("Item removed successfully");
}

function viewCommands(){
	alert("Here's a full list of commands.");
	alert("new- adds new item to the list.");
	alert("list- views list of things to do.");
	alert("delete- deletes item from the list.");
	alert("help- shows list of commands.");
	alert("close- closes the application");
}