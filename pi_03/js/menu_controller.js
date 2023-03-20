function start_game(){
	name = prompt("User name");
	
	sessionStorage.setItem("username", name);
	
	loadpage("./html/game.html");
}

function inici (){
	loadpage("../index.html");
}

function exit (){
	if (name != ""){
		alert("Leaving " + name + "'s game");
	}
	name = "";
}

function options(){
	loadpage("./html/options.html");
}


