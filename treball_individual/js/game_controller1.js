var json = localStorage.getItem("config") || '{"cards":2,"dificulty":"hard"}';
var temps = 0;

class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
        this.cards = null;
        this.numCards = JSON.parse(json).cards;
        this.dificulty = JSON.parse(json).dificulty;
		this.firstClick = null;
		this.score = 100;
		this.correct = 0;
    }

    preload ()
    {
        this.load.image('back', '../resources/back.png');
		this.load.image('cb', '../resources/cb.png');
		this.load.image('co', '../resources/co.png');
		this.load.image('sb', '../resources/sb.png');
		this.load.image('so', '../resources/so.png');
		this.load.image('tb', '../resources/tb.png');
		this.load.image('to', '../resources/to.png');
    }

    create (){	
        
        let arraycards = ['cb', 'co', 'sb', 'so', 'tb', 'to'];
		this.cameras.main.setBackgroundColor(0xBFFCFF);
		Phaser.Utils.Array.Shuffle(arraycards);
        arraycards = arraycards.slice(0, this.numCards);
		arraycards = arraycards.concat(arraycards);
		Phaser.Utils.Array.Shuffle(arraycards);
        for (let index = 0; index < arraycards.length; index++) {
            this.add.image(250+index*100, 300, arraycards[index]);
        }
        if (this.dificulty === "normal" ) temps = 1000;
		else if (this.dificulty === "easy" ) temps = 2000;
		else if (this.dificulty === "hard" ) temps = 500;
        this.cards = this.physics.add.staticGroup();
        setTimeout(() => {
            for (let index = 0; index < arraycards.length; index++) {
                this.cards.create(250+index*100, 300, 'back');
            }
            let i = 0;
		    this.cards.children.iterate((card)=>{
                card.card_id = arraycards[i];
                i++;
                card.setInteractive();
                card.on('pointerup', () => {
                    card.disableBody(true,true);
                    if (this.firstClick){
                        if (this.firstClick.card_id !== card.card_id){
                            this.score -= 20;
                            this.firstClick.enableBody(false, 0, 0, true, true);
                            card.enableBody(false, 0, 0, true, true);
                            if (this.score <= 0){
                                alert("Game Over");
                                loadpage("../");
                            }
                        }
                        else{
                            this.correct++;
                            if (this.correct >= this.numCards){
                                alert("You Win with " + this.score + " points.");
                                loadpage("../");
                            }
                        }
                        this.firstClick = null;
                    }
                    else{
                        this.firstClick = card;
                    }
                }, card);
		    });
        }, temps);
        
		
	}
}


const config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
    parent: 'game_area',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);