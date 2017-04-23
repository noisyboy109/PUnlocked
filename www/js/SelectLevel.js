Pushbox.SelectLevel = function(game){
};

var level = +localStorage.getItem('level') || 0;
Pushbox.SelectLevel.prototype = {


create: function(game){

	
	this._fontStyle = { font: "80px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
	var pausedText = this.add.text(290, 120, "Select Level", this._fontStyle);
	this.stage.backgroundColor = 'rgb(100,100,100)';

	next = game.add.button(game.world.width - 120,game.world.height - 600,'next',this.selectlevel,this);
	next.width = 80; next.height = 80;
	game.add.button(game.world.width - 910,game.world.height - 500,'1',this.level1,this);
	game.add.button(game.world.width - 760,game.world.height - 500,'2',this.level2,this);
	game.add.button(game.world.width - 560,game.world.height - 500,'3',this.level21,this);
	game.add.button(game.world.width - 360,game.world.height - 500,'4',this.level22,this);
	game.add.button(game.world.width - 210,game.world.height - 500,'5',this.level3,this);

	game.add.button(game.world.width - 910,game.world.height - 350,'6',this.level41,this);
	game.add.button(game.world.width - 760,game.world.height - 350,'7',this.level4,this);
	game.add.button(game.world.width - 560,game.world.height - 350,'8',this.level40,this);
	game.add.button(game.world.width - 360,game.world.height - 350,'9',this.level42,this);
	game.add.button(game.world.width - 210,game.world.height - 350,'10',this.level7,this);

	game.add.button(game.world.width - 910,game.world.height - 200,'11',this.level5,this);
	game.add.button(game.world.width - 760,game.world.height - 200,'12',this.level51,this);
	game.add.button(game.world.width - 560,game.world.height - 200,'13',this.level61,this);
	game.add.button(game.world.width - 360,game.world.height - 200,'14',this.level52,this);
	game.add.button(game.world.width - 210,game.world.height - 200,'15',this.level53,this);

	// slock1 = game.add.image(game.world.width-910, game.world.height - 500, 'slock'); 
	// slock2 = game.add.image(game.world.width-760, game.world.height - 500, 'slock'); 
	// slock3 = game.add.image(game.world.width-560, game.world.height - 500, 'slock'); 
	// slock4 = game.add.image(game.world.width-360, game.world.height - 500, 'slock'); 
	// slock5 = game.add.image(game.world.width-210, game.world.height - 500, 'slock'); 

	// slock6 = game.add.image(game.world.width-910, game.world.height - 350, 'slock'); 
	// slock7 = game.add.image(game.world.width-760, game.world.height - 350, 'slock'); 
	// slock8 = game.add.image(game.world.width-560, game.world.height - 350, 'slock'); 
	// slock9 = game.add.image(game.world.width-360, game.world.height - 350, 'slock'); 
	// slock10 = game.add.image(game.world.width-210, game.world.height - 350, 'slock'); 

	// slock11 = game.add.image(game.world.width-910, game.world.height - 200, 'slock'); 
	// slock12 = game.add.image(game.world.width-760, game.world.height - 200, 'slock'); 
	// slock13 = game.add.image(game.world.width-560, game.world.height - 200, 'slock'); 
	// slock14 = game.add.image(game.world.width-360, game.world.height - 200, 'slock'); 
	// slock15 = game.add.image(game.world.width-210, game.world.height - 200, 'slock'); 

	home = game.add.button(game.world.width-250,game.world.height-660,'home',this.home,this);
    home.alpha = 0.6;
	// if(level>=0){
	// slock1.alpha = 0;
	// }
	// if (level >=1){
	// slock2.alpha = 0;
	// }
	// if (level >=2){
	// slock3.alpha = 0;
	// }
	// if (level >=3){
	// slock4.alpha = 0;
	// }
	// if (level >=4){
	// slock5.alpha = 0;
	// }

	// if(level>=5){
	// slock6.alpha = 0;
	// }
	// if (level >=6){
	// slock7.alpha = 0;
	// }
	// if (level >=7){
	// slock8.alpha = 0;
	// }
	// if (level >=8){
	// slock9.alpha = 0;
	// }
	// if (level >=9){
	// slock10.alpha = 0;
	// }

	// if(level>=10){
	// slock11.alpha = 0;
	// }
	// if (level >=11){
	// slock12.alpha = 0;
	// }
	// if (level >=12){
	// slock13.alpha = 0;
	// }
	// if (level >=13){
	// slock14.alpha = 0;
	// }
	// if (level >=14){
	// slock15.alpha = 0;
	// }
	
},

	selectlevel: function(){

		this.state.start('SelectLevel2');
	},

	level1: function(){
		// level = 3;
		// if(level>=0){
			this.state.start('Level1');
			localStorage.setItem('level', level);

		// }

	},
	level2: function(){		
		// localStorage.setItem('level', level);
		// if(level>=1){
			this.state.start('Level2');
			//localStorage.setItem('level', level);
		// }
		},

	level21: function(){
		// if(level>=2){
			this.state.start('Level2_1');
			//localStorage.setItem('level', level);
		// }
	},
	level22: function(){
		// if(level>=3){
			this.state.start('Level21');
			//localStorage.setItem('level', level);
		// }
	},
	level3: function(){
		// if(level>=4){
			this.state.start('Level22');
			//localStorage.setItem('level', level);
		// }
	},



	level41: function(){
		// if(level>=5){
			this.state.start('Level3_1');
			localStorage.setItem('level', level);
		// }

	},
	level4: function(){		
		// localStorage.setItem('level', level);
		// if(level>=6){
			this.state.start('Level1_1');
			//localStorage.setItem('level', level);
		// }
		},

	level40: function(){
		// if(level>=7){
			this.state.start('Level3');
			//localStorage.setItem('level', level);
		// }
	},
	level42: function(){
		// if(level>=8){
			this.state.start('Level22_1');
			//localStorage.setItem('level', level);
		// }
	},
	level7: function(){
		// if(level>=9){
			this.state.start('Level21_1');
			//localStorage.setItem('level', level);
		// }
	},





	level5: function(){
		// if(level>=10){
			this.state.start('Level41_1');
			localStorage.setItem('level', level);
		// }

	},
	level51: function(){		
		// localStorage.setItem('level', level);
		// if(level>=11){
			this.state.start('Level41');
			//localStorage.setItem('level', level);
		// }
		},

	level61: function(){
		// if(level>=12){
			this.state.start('Level4');
			//localStorage.setItem('level', level);
		// }
	},
	level52: function(){
		// if(level>=13){
			this.state.start('Level4_1');
			//localStorage.setItem('level', level);
		// }
	},
	level53: function(){
		// if(level>=14){
			this.state.start('Level40');
			//localStorage.setItem('level', level);
		// }
	},


	home: function(game){

        this.state.start('MainMenu');

    },


};