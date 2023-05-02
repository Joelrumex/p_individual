function joc() {
	const mode = window.prompt('Selecciona el mode de joc (1 o 2)');
    if (mode === '1') {
		loadpage("./html/joc.html");
    } else if (mode === '2') {
		loadpage("./html/joc2.html");
    } else {
      window.alert('Mode de joc no vàlid');
    }
}

function puntuacions() {
	loadpage("./html/puntuacions.html");
}

function opcions() {
	loadpage("./html/opcions.html");
}

function carregar() {
	loadpage("./html/carregar.html");
}

function sortir() {
	loadpage("../index.html");
}

var menu_controller = new Vue({
	el: "#menu",
	data: {
		  menuTitle: "Memory menu",
		  menuItems: [
			{ label: "Jugar", action: () => joc() },
			{ label: "Puntuacions", action: () => puntuacions() },
			{ label: "Opcions", action: () => opcions() },
			{ label: "Carregar", action: () => carregar() },
			{ label: "Sortir", action: () => sortir() }
		  ],
	},
	watch: {
		
	}
});