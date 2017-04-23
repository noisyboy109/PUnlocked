Pushbox.SelectLevel2 = function(game){
};

var level = +localStorage.getItem('level') || 0;
Pushbox.SelectLevel2.prototype = {


create: function(game){

	
	this._fontStyle = { font: "80px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
	this._fontStyle1 = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
	var pausedText = this.add.text(290, 120, "Select Level", this._fontStyle);
	this.stage.backgroundColor = 'rgb(100,100,100)';

	previous = game.add.button(game.world.width - 120,game.world.height - 600,'previous',this.selectlevel,this);
	previous.width = 80; previous.height = 80;

	l1 = game.add.button(game.world.width - 910,game.world.height - 500,'16',this.level1,this);
	l2 = game.add.button(game.world.width - 760,game.world.height - 500,'17',this.level2,this);
	l3 = game.add.button(game.world.width - 560,game.world.height - 500,'18',this.level21,this);
	l4 = game.add.button(game.world.width - 360,game.world.height - 500,'19',this.level22,this);
	l5 = game.add.button(game.world.width - 210,game.world.height - 500,'20',this.level3,this);

	l6 = game.add.button(game.world.width - 910,game.world.height - 350,'21',this.level41,this);
	l7 = game.add.button(game.world.width - 760,game.world.height - 350,'22',this.level4,this);
	l8 = game.add.button(game.world.width - 560,game.world.height - 350,'23',this.level40,this);
	l9 = game.add.button(game.world.width - 360,game.world.height - 350,'24',this.level42,this);
	l0 = game.add.button(game.world.width - 210,game.world.height - 350,'25',this.level7,this);

	l11 = game.add.button(game.world.width - 910,game.world.height - 200,'26',this.level5,this);
	l12 = game.add.button(game.world.width - 760,game.world.height - 200,'27',this.level51,this);
	l13 = game.add.button(game.world.width - 560,game.world.height - 200,'28',this.level61,this);
	l14 = game.add.button(game.world.width - 360,game.world.height - 200,'29',this.level52,this);
	l15 = game.add.button(game.world.width - 210,game.world.height - 200,'30',this.level53,this);

	l1.width = 100; l1.height = 100; l2.width = 100; l2.height = 100; l3.width = 100; l3.height = 100;
	l4.width = 100; l4.height = 100; l5.width = 100; l5.height = 100; l6.width = 100; l6.height = 100;
	l7.width = 100; l7.height = 100; l8.width = 100; l8.height = 100; l9.width = 100; l9.height = 100;
	l0.width = 100; l0.height = 100; l11.width = 100; l11.height = 100; l12.width = 100; l12.height = 100;
	l13.width = 100; l13.height = 100; l14.width = 100; l14.height = 100; l15.width = 100; l15.height = 100;


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

	// home = game.add.button(game.world.width-150,game.world.height-660,'home',this.home,this);
 //    home.alpha = 0.6;
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

		this.state.start('SelectLevel');
	},

	level1: function(){
		// level = 3;
		// if(level>=15){
			this.state.start('Level42');
			localStorage.setItem('level', level);

		// }

	},
	level2: function(){		
		// localStorage.setItem('level', level);
		// if(level>=16){
			this.state.start('Level7_1');
			//localStorage.setItem('level', level);
		// }
		},

	level21: function(){
		// if(level>=17){
			this.state.start('Level42_1');
			//localStorage.setItem('level', level);
		// }
	},
	level22: function(){
		// if(level>=18){
			this.state.start('Level7');
			//localStorage.setItem('level', level);
		// }
	},
	level3: function(){
		// if(level>=19){
			this.state.start('Level40_1');
			//localStorage.setItem('level', level);
		// }
	},



	level41: function(){
		// if(level>=20){
			this.state.start('Level5_1');
			localStorage.setItem('level', level);
		// }

	},
	level4: function(){		
		// localStorage.setItem('level', level);
		// if(level>=21){
			this.state.start('Level61_1');
			//localStorage.setItem('level', level);
		// }
		},

	level40: function(){
		// if(level>=22){
			this.state.start('Level53_1');
			//localStorage.setItem('level', level);
		// }
	},
	level42: function(){
		// if(level>=23){
			this.state.start('Level52_1');
			//localStorage.setItem('level', level);
		// }
	},
	level7: function(){
		// if(level>=24){
			this.state.start('Level51_1');
			//localStorage.setItem('level', level);
		// }
	},





	level5: function(){
		// if(level>=25){
			this.state.start('Level5');
			localStorage.setItem('level', level);
		// }

	},
	level51: function(){		
		// localStorage.setItem('level', level);
		// if(level>=26){
			this.state.start('Level51');
			//localStorage.setItem('level', level);
		// }
		},

	level61: function(){
		// if(level>=27){
			this.state.start('Level61');
			//localStorage.setItem('level', level);
		// }
	},
	level52: function(){
		// if(level>=28){
			this.state.start('Level52');
			//localStorage.setItem('level', level);
		// }
	},
	level53: function(){
		// if(level>=29){
			this.state.start('Level53');
			//localStorage.setItem('level', level);
		// }
	},


	home: function(game){

        this.state.start('MainMenu');

    },


};