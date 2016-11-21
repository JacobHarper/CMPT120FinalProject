function changeplayer() {
	// You need to add a statement here to find out who is currently playing the game, “X” or “O” by reading the paragraph “currentplayer” in tictactoe.html, and save it in a variable called player
	var player = document.getElementById("currentplayer").innerHTML;
	// Display “X” and “O” by turns
	if (player == "X") {
		// The next user to play is “O” if the current user is “X”
		document.getElementById("currentplayer").innerHTML = "O";
	} else {
		document.getElementById("currentplayer").innerHTML = "X";
	}
}

function set(idvalue) {
	var buttonclicked = document.getElementById(idvalue);
	if (buttonclicked.innerHTML == "" || buttonclicked.innerHTML == null) {
		var cp = document.getElementById("currentplayer").innerHTML;
		buttonclicked.innerHTML = cp;
		checkwin();
	} else {
		alert("You can't click this!");
	}
}

function checkwin(){
	var player = document.getElementById("currentplayer").innerHTML;
	if(document.getElementById("b0").innerHTML ==  document.getElementById("b1").innerHTML && document.getElementById("b1").innerHTML ==  document.getElementById("b2").innerHTML && document.getElementById("b2").innerHTML ==  document.getElementById("b3").innerHTML && document.getElementById("b1").innerHTML == player)	{ 
    	alert("You win! The winner is "+ player); // Check if (0,1,2) has been achieved
  	}
	else if(document.getElementById("b4").innerHTML ==  document.getElementById("b5").innerHTML && document.getElementById("b5").innerHTML ==  document.getElementById("b6").innerHTML && document.getElementById("b6").innerHTML ==  document.getElementById("b7").innerHTML && document.getElementById("b5").innerHTML == player)	{ 
    	alert("You win! The winner is "+ player); // Check if (0,1,2) has been achieved
  	}
	else if(document.getElementById("b8").innerHTML ==  document.getElementById("b9").innerHTML && document.getElementById("b9").innerHTML ==  document.getElementById("b10").innerHTML && document.getElementById("b10").innerHTML ==  document.getElementById("b11").innerHTML && document.getElementById("b9").innerHTML == player)	{ 
    	alert("You win! The winner is "+ player); // Check if (0,1,2) has been achieved
  	}
	else if(document.getElementById("b12").innerHTML ==  document.getElementById("b13").innerHTML && document.getElementById("b13").innerHTML ==  document.getElementById("b14").innerHTML && document.getElementById("b14").innerHTML ==  document.getElementById("b15").innerHTML && document.getElementById("b13").innerHTML == player)	{ 
    	alert("You win! The winner is "+ player); // Check if (0,1,2) has been achieved
  	}
	else if(document.getElementById("b0").innerHTML ==  document.getElementById("b4").innerHTML && document.getElementById("b4").innerHTML ==  document.getElementById("b8").innerHTML && document.getElementById("b8").innerHTML ==  document.getElementById("b12").innerHTML && document.getElementById("b4").innerHTML == player)	{ 
    	alert("You win! The winner is "+ player); // Check if (0,1,2) has been achieved
  	}
	else if(document.getElementById("b1").innerHTML ==  document.getElementById("b5").innerHTML && document.getElementById("b5").innerHTML ==  document.getElementById("b9").innerHTML && document.getElementById("b9").innerHTML ==  document.getElementById("b13").innerHTML && document.getElementById("b5").innerHTML == player)	{ 
    	alert("You win! The winner is "+ player); // Check if (0,1,2) has been achieved
  	}
	else if(document.getElementById("b2").innerHTML ==  document.getElementById("b6").innerHTML && document.getElementById("b6").innerHTML ==  document.getElementById("b10").innerHTML && document.getElementById("b10").innerHTML ==  document.getElementById("b14").innerHTML && document.getElementById("b6").innerHTML == player)	{ 
    	alert("You win! The winner is "+ player); // Check if (0,1,2) has been achieved
  	}
	else if(document.getElementById("b3").innerHTML ==  document.getElementById("b7").innerHTML && document.getElementById("b7").innerHTML ==  document.getElementById("b11").innerHTML && document.getElementById("b11").innerHTML ==  document.getElementById("b15").innerHTML && document.getElementById("b7").innerHTML == player)	{ 
    	alert("You win! The winner is "+ player); // Check if (0,1,2) has been achieved
  	}
	else if(document.getElementById("b0").innerHTML ==  document.getElementById("b5").innerHTML && document.getElementById("b5").innerHTML ==  document.getElementById("b10").innerHTML && document.getElementById("b10").innerHTML ==  document.getElementById("b15").innerHTML && document.getElementById("b5").innerHTML == player)	{ 
    	alert("You win! The winner is "+ player); // Check if (0,1,2) has been achieved
  	}
	else if(document.getElementById("b3").innerHTML ==  document.getElementById("b6").innerHTML && document.getElementById("b6").innerHTML ==  document.getElementById("b9").innerHTML && document.getElementById("b9").innerHTML ==  document.getElementById("b12").innerHTML && document.getElementById("b6").innerHTML == player)	{ 
    	alert("You win! The winner is "+ player); // Check if (0,1,2) has been achieved
  	}
	else{
		changeplayer(); // nobody wins, change player
}
}
checkwin();




