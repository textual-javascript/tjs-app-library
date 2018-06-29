var myShips = [{id:"ship 1", pos: ""}, {id: "ship 2", pos: ""}, {id: "ship 3", pos: ""}, {id: "ship 4",pos: ""}, {id: "ship 5",pos: ""}]
var compShips = [{id:"ship 1", pos: ""}, {id: "ship 2", pos: ""}, {id: "ship 3", pos: ""}, {id: "ship 4",pos: ""}, {id: "ship 5",pos: ""}]
var charSet = "ABCDEFGHIJ"

printOut("Welcome to battleships text game! Type start, to play...")
$("input[type='text']").keypress(function(event){
  if(event.which === 13 &&){
	 if(command === "start"){
		explainRules();
		$("input[type='text']").attr("maxlength", "1")
        printOut("Ok, now type 1 letter")		
	 }
  })
  
  function explainRules(){
	  printOut("And as usual, I'll explain game's rules.")
	  printOut("Basically, your task is to drown all of the 5 computer's battleships.")
	  printOut("The problem is, that neither you nor computer knows rival's ships' positions.")
	  printOut("You have to guess them by typing letter from A to J, and number from 1 to 10.")
	  printOut("They stand for coordinates, for e.g. A4")
	  printOut("The first one to drown opponent's 5 ships, wins!")
  }