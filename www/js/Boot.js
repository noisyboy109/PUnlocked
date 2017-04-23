var Pushbox = {};

Pushbox.Boot = function(game){

};

Pushbox.Boot.prototype = {

	init: function(){

			this.input.maxPointers = 1;
			this.stage.disableVisibilityChange = true;
	},

	preload: function(game){

    this.load.image('loading', 'img/loading.png');
    this.load.image('load_progress_bar_dark', 'img/progress_bar_bg.png');
    this.load.image('load_progress_bar', 'img/progress_bar_fg.png');
		this.load.image('preloaderBar','img/preloader.png');
    game.load.audio('music', 'maps/music.mp3');
    game.load.audio('click', 'maps/click.mp3');
	},

	create: function(game){

    music = game.add.audio('music');
    music.loop = true;
    music.play();
		Pushbox.orientated = true;
		this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
		this.scale.width = this.game.width;
		this.scale.height = this.game.height;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.scale.setScreenSize = true;

	
		this.state.start('Preloader');
	},

};