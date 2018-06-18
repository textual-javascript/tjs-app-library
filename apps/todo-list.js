var todos = []
var input = $("input[type='text']")
var command = input.val()
var lockCommands = false;

printOut("Welcome to my todo-list app!")

input.keypress(function(event){
	if(event.which === 13 && lockCommands == false){
		if(command == "new"){
			addItem()
		}
		else if(command == "list"){
			listItems()
		}
		else if(command == "remove"){
			removeItem()
		}
		else if(command == "close"){
			lockCommands = true;
		}
	}
})

function addItem(){
	printOut("Type thing, you want to add.");
	input.keypress(function(event){
		if(event.which === 13){
			todos.push(command);
			printOut("New item was added to the list.")
		}
	})
}

function listItems(){
   if(todos.length !== 0){
		todos.forEach(function(todo, index){
		printOut("" + index + ":" + todo)
	 })	
   }
   else{
	   printOut("Your list is empty!");
   }
}

function removeItem(){
	printOut("What item do you want to remove (type its index)")
	input.keypress(function(event){
	  todos.splice(command, 1)
	  printOut("Item was removed from the list.")	
	})
}