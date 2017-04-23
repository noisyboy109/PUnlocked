Pushbox.help = function(game){};

Pushbox.help.prototype = {

	create: function(game){

	back = this.add.image(0,0,'hbackground',this);
	back.width = 1020; back.height = 720;
	
	enemy = game.add.sprite(game.world.width - 530, game.world.height - 500, 'monster')
    enemy.animations.add('move',[0,1,2],3, true);
    enemy.animations.play('move',10);
	home = game.add.button(game.world.width-150,game.world.height-660,'home',this.home,this);
    home.alpha = 0.6;
	},
	home: function(game){

    this.state.start('MainMenu');

    },

};