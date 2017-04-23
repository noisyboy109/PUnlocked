Pushbox.about = function(game){};

Pushbox.about.prototype = {

	create: function(game){

	this.stage.backgroundColor = 'rgb(100,100,100)';
	this._fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
	this._1fontStyle = { font: "30px Arial", fill: "#FFFFFF", stroke: "#333", strokeThickness: 5, align: "center" };
	var pausedText = this.add.text(410, 80, "Developers", this._fontStyle);
	var pausedText = this.add.text(358, 170, "Jason Ramos \n Marvin De leon \n Christopher Casaclang", this._1fontStyle);
	var pausedText = this.add.text(350, 380, "Special Thanks to:", this._fontStyle);
	var pausedText = this.add.text(375, 450, "Sir. Rufo Gabrillo Jr.\n (Thesis Adviser)\n\n Janna Tanigue\n (buttons designing)", this._1fontStyle);
	home = game.add.button(game.world.width-150,game.world.height-660,'home',this.home,this);
    home.alpha = 0.6;
	},

	home: function(game){

    this.state.start('MainMenu');

    },

};