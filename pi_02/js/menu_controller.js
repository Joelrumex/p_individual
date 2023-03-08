function start_game(){
	name = prompt("User name");
	loadpage("./html/game.html");
}

function exit (){
	if (name != ""){
		alert("Leaving " + name + "'s game");
	}
	name = "";
}

function inici (){
	loadpage("../index.html");
}

function practica2 (){
	loadpage("./pi_02/index.html")
}

function options(){
	// TODO: Open options menu
	console.log("Options menu button");
}


