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
		changeplayer();
	} else {
		alert("You can't click this!");
	}
}