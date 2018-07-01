var myShips = [{id:"ship 1", pos: ""}, {id: "ship 2", pos: ""}, {id: "ship 3", pos: ""}, {id: "ship 4",pos: ""}, {id: "ship 5",pos: ""}]
var compShips = [{id:"ship 1", pos: ""}, {id: "ship 2", pos: ""}, {id: "ship 3", pos: ""}, {id: "ship 4",pos: ""}, {id: "ship 5",pos: ""}]
var charSet = "ABCDEFGHI"
var index = 0
var cordinateNum = 0
var cordinateChar = ""
var cordinate = ""
var canSetCordinates = false
var isUserTurn = false

printOut("Welcome to battleships text game! Type start, to play...")
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
	 if(command === "start"){
		$( "li" ).last().toggleClass("success");
		explainRules();
		$("input[type='text']").attr("maxlength", "2")
        printOut("Alright, now that you know cordinates' format, type 5 of them")
        printOut("Do it separately, i.e. type for e.g B7 cordinate, press enter and then type another one, until you type 5 of them correctly.")
        printOut("If you type the same cordinate twice...")	
        printOut("For e.g. you type A1, and type A1 again, the second A1 will be replaced by randomly chosen other cordinate...")
        printOut("Unless all cordinates are unique.")
        printOut("The same thing happens, if you type invalid cordinate format, like 4D")		
        canSetCordinates = true		
	 }
	 if(canSetCordinates === true){
        verifyCordinate();
	 }
   }
 })
  
 function explainRules(){
	  printOut("And as usual, I'll explain game's rules.")
	  printOut("Basically, your task is to drown all of the 5 computer's battleships.")
	  printOut("The problem is, that neither you nor computer knows rival's ships' positions.")
	  printOut("You have to guess them by typing letter from A to I, and number from 1 to 9.")
	  printOut("They stand for coordinates, for e.g. A6")
	  printOut("The first one to drown opponent's 5 ships, wins!")
 }
  
function verifyCordinate(){
	  cordinate = command
      cordinateChar = cordinate[0].toUpperCase();
	  cordinateNum = parseInt(cordinate[1])
	  if(parseInt(cordinateChar) === NaN && cordinateNum !== NaN){
		 for(var i = 0; i < myShips.length; i++){
			 if(myShips[i].pos === cordinate){
				cordinate = charset[randomNum(0, 8)] + randomNum(1, 9).toString()
				printOut(cordinate);
			 }
		 }
		 $( "li" ).last().toggleClass("success");
         if(myShips[4].pos !== ""){
			 printOut("Alright, we're good to go now!")	
		 }		 
	  }
}