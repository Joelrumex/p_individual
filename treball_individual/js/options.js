var options = function(){
	// Aquí dins hi ha la part privada de l'objecte
	var options_data = {
		cards:2, dificulty:"hard", dificulty2:"1"
	};
	var load = function(){
		var json = localStorage.getItem("config") || '{"cards":2,"dificulty":"hard","dificulty2":"1"}';
		options_data = JSON.parse(json);
	};
	var save = function(){
		localStorage.setItem("config", JSON.stringify(options_data));
	};
	load();
	var vue_instance = new Vue({
		el: "#options_id",
		data: {
			num: 2,
			dificulty: "normal",
			dificulty2: "1"
		},
		created: function(){
			this.num = options_data.cards;
			this.dificulty = options_data.dificulty;
			this.dificulty2 = options_data.dificulty2;
		},
		watch: {
			num: function(value){
				if (value < 2)
					this.num = 2;
				else if (value > 4)
					this.num = 4;
			}
		},
		methods: { 
			discard: function(){
				this.num = options_data.cards;
				this.dificulty = options_data.dificulty;
				this.dificulty2 = options_data.dificulty2;
				loadpage("../index.html")
			},
			save: function(){
				options_data.cards = this.num;
				options_data.dificulty = this.dificulty;
				options_data.dificulty2 = this.dificulty2;
				save();
				loadpage("../index.html");
			},
		}
	});
	return {
		// Aquí dins hi ha la part pública de l'objecte
		getOptionsString: function (){
			return JSON.stringify(options_data);
		},
		getNumOfCards: function (){
			return options_data.cards;
		},
		getDificulty: function (){
			return options_data.dificulty;
		},
		getDificulty2: function (){
			return options_data.dificulty2;
		}
	}; 
}();

console.log(options.getOptionsString());
console.log(options.getNumOfCards());
console.log(options.getDificulty());
console.log(options.getDificulty2());
console.log(options.options_data);




