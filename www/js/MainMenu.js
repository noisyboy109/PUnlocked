Pushbox.MainMenu = function(game){};



Pushbox.MainMenu.prototype = {

		create:function(game){
		//	
		this._fontStyle = { font: "80px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
		var pausedText = this.add.text(340, 120, "Push Box", this._fontStyle);
		this.stage.backgroundColor = '6B8E23';
		sbutton = game.add.button(game.world.width - 660,game.world.height - 450,'startbutton',this.startGame,this);
		sbutton.width = 300; sbutton.height = 80;
		ibutton = game.add.button(game.world.width - 660,game.world.height - 350,'insbutton',this.help,this);
		ibutton.width = 300; ibutton.height = 80;
		abutton = game.add.button(game.world.width - 660,game.world.height - 250,'aboutbutton',this.about,this);
		abutton.width = 300; abutton.height = 80;
		ebutton = game.add.button(game.world.width - 660,game.world.height - 150,'exitbutton',this.exit,this);
		ebutton.width = 300; ebutton.height = 80;
		click = game.add.audio('click');
		
   
     	// this.soundButton = this.game.add.button(this.game.world.width - 120, this.game.world.height - 660, 'sound', this.toggleMute, this);
		 },

		startGame:function(game){

			click.play();
			this.state.start('SelectLevel');
		},

		about: function(game){

			click.play();
			this.state.start('about');	

		},

		help: function(game){

			click.play();
			this.state.start('help');	

		},


		exit: function(device,app){
			window.location.reload(false);
		},

	 //    toggleMute: function() {
	 //    if (!this.game.sound.mute) {
	 //    	this.soundButton.frame = 1;
	 //        this.game.sound.mute = true;
	 //        //this.soundButton.tint = 16711680;
	 //    } else {
	 //    	this.soundButton.frame = 0;
	 //        this.game.sound.mute = false;
	 //        //this.soundButton.tint = 16777215;
	 //    }
		// },

}