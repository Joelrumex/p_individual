var menu_controller = new Vue({
	el: "#menu",
	data: {
		  menuTitle: "Memory menu",
	},
	methods: {
	joc: function() {
		console.log("HOLA")
	},
	puntuacions: function() {
		loadpage("./html/joc.html")
	},
	opcions: function() {
		loadpage("./html/joc.html")
	},
	carregar: function() {
		loadpage("./html/joc.html")
	},
	sortir: function() {
		loadpage("./html/joc.html")
	},
	}
});