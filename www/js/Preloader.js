Pushbox.Preloader = function(game){


};

Pushbox.Preloader.prototype = {

	preload: function(game){

	this.displayLoadScreen(game);

		//enemy
	game.load.crossOrigin = "Anonymous";
    game.load.spritesheet('monster', 'img/monster1.png',55,55);
    
    //audio
    
	
	//map
	game.load.tilemap('map1','maps/level1.csv',null, Phaser.Tilemap_CSV);
	game.load.tilemap('map2','maps/level2.csv',null, Phaser.Tilemap_CSV);
	game.load.tilemap('map21','maps/level.21.csv',null, Phaser.Tilemap_CSV);
	game.load.tilemap('map22','maps/level22.csv',null, Phaser.Tilemap_CSV);
	game.load.tilemap('map3','maps/level3.csv',null, Phaser.Tilemap_CSV);
	game.load.tilemap('map4','maps/level4.csv',null, Phaser.Tilemap_CSV);
	game.load.tilemap('map40','maps/level40.csv',null, Phaser.Tilemap_CSV);
	game.load.tilemap('map41','maps/level41.csv',null, Phaser.Tilemap_CSV);
	game.load.tilemap('map42','maps/level42.csv',null, Phaser.Tilemap_CSV);
	game.load.tilemap('map5','maps/level5.csv',null, Phaser.Tilemap_CSV);
	game.load.tilemap('map51','maps/level51.csv',null, Phaser.Tilemap_CSV);
	game.load.tilemap('map52','maps/level52.csv',null, Phaser.Tilemap_CSV);
	game.load.tilemap('map53','maps/level53.csv',null, Phaser.Tilemap_CSV);
	game.load.tilemap('map7','maps/level7.csv',null, Phaser.Tilemap_CSV);
	game.load.tilemap('map61','maps/level61.csv',null, Phaser.Tilemap_CSV);
	game.load.tilemap('map63','maps/level63.csv',null, Phaser.Tilemap_CSV);
	game.load.tilemap('map633','maps/level63.json',null, Phaser.Tilemap_JSON);
	game.load.spritesheet('tileset','img/tilewall.png');
	//game.load.spritesheet('newTileset','img/tilewall01.png');
	game.load.image('background','img/background.png');
	game.load.image('hbackground','img/hbackground.png');
	game.load.image('background2','img/gameOverBackGround.png');
	game.load.image('background3','img/levelComplete.png');

	//player
	game.load.spritesheet('boy', 'img/character.png',55,55); 
	game.load.image('heart','img/life.png',32,32);

	//key and lock
	game.load.image('redkey','img/redkey.png',28,52);
	game.load.image('bluekey','img/bluekey.png',28,52);
	game.load.image('yellowkey','img/yellowkey.png',28,52);
	game.load.image('pinkkey','img/pinkkey.png',28,52);
	game.load.image('greenkey','img/greenkey.png',28,52);
	game.load.image('BLaserUD','img/BlueLaser1.png',60,28);
	game.load.image('BLaserRL','img/BlueLaser.png',60,28);
	game.load.image('GLaserUD','img/GreenLaser1.png',60,28);
	game.load.image('GLaserRL','img/GreenLaser.png',60,28);
	game.load.image('RLaserUD','img/RedLaser1.png',60,28);
	game.load.image('RLaserRL','img/RedLaser.png',60,28);
    game.load.image('lock1','img/lock1.png',56,56);
    game.load.image('lock2','img/lock2.png',56,56);
    game.load.image('lock3','img/lock3.png',56,56);
    game.load.image('lock4','img/lock4.png',56,56);
    game.load.image('lock5','img/lock5.png',56,56);

    //spots
    game.load.spritesheet('spots','img/spot.png');
    game.load.spritesheet('spotL','img/spotL.png');
    //boxes
    game.load.image('box','img/box1.png');
	//gamepad buttons
	game.load.spritesheet('startbutton','img/bstart.png');
	game.load.spritesheet('insbutton','img/binstruction.png');
	game.load.spritesheet('aboutbutton','img/babout.png');
	game.load.spritesheet('exitbutton','img/bexit.png');
	game.load.spritesheet('pause','img/pause.png',100,100);
	game.load.image('continue','img/continue.png',100,100);
	game.load.image('undo','img/undo.png',100,100);
	game.load.image('restart','img/restart.png',100,100);
	game.load.image('home','img/home.png',100,100);
    game.load.spritesheet('buttonup', 'img/bup.png',80,80);
    game.load.spritesheet('buttondown', 'img/bdown.png',80,80);
    game.load.spritesheet('buttonleft', 'img/bleft.png',80,80);
    game.load.spritesheet('buttonright', 'img/bright.png',80,80);
    game.load.spritesheet('sound', 'img/sound.png',100,100);
  	
    //level select
    game.load.image('previous','img/previous.png');
    game.load.image('next','img/next.png');
    game.load.image('1','img/1.png',100,100);
    game.load.image('2','img/2.png',100,100);
    game.load.image('3','img/3.png',100,100);
    game.load.image('4','img/4.png',100,100);
    game.load.image('5','img/5.png',100,100);

    game.load.image('6','img/6.png',100,100);
    game.load.image('7','img/7.png',100,100);
    game.load.image('8','img/8.png',100,100);
    game.load.image('9','img/9.png',100,100);
    game.load.image('10','img/10.png',100,100);

    game.load.image('11','img/11.png',100,100);
    game.load.image('12','img/12.png',100,100);
    game.load.image('13','img/13.png',100,100);
    game.load.image('14','img/14.png',100,100);
    game.load.image('15','img/15.png',100,100);

    game.load.image('16','img/16.png');
    game.load.image('17','img/17.png');
    game.load.image('18','img/18.png');
    game.load.image('19','img/19.png');
    game.load.image('20','img/20.png');

    game.load.image('21','img/21.png');
    game.load.image('22','img/22.png');
    game.load.image('23','img/23.png');
    game.load.image('24','img/24.png');
    game.load.image('25','img/25.png');

    game.load.image('26','img/26.png');
    game.load.image('27','img/27.png');
    game.load.image('28','img/28.png');
    game.load.image('29','img/29.png');
    game.load.image('30','img/30.png');

    game.load.image('slock','img/slock.png',100,100);
	},

	displayLoadScreen: function (game) {
    var centerX = game.camera.width / 2;
    var centerY = game.camera.height / 2;

    this.loading = game.add.sprite(centerX, centerY - 20, 'loading');
    this.loading.anchor.setTo(0.5, 0.5);

    this.barBg = game.add.sprite(centerX, centerY + 40, 'load_progress_bar_dark');
    this.barBg.anchor.setTo(0.5, 0.5);

    this.bar = game.add.sprite(centerX - 192, centerY + 40, 'load_progress_bar');
    this.bar.anchor.setTo(0, 0.5);
    this.load.setPreloadSprite(this.bar);

    // onLoadComplete is dispatched when the final file in the load queue has been loaded/failed. addOnce adds that function as a callback, but only to fire once.
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
  },

  update: function () {
    if (this.ready = true) { 
      this.game.state.start('MainMenu');
    }
  },

  onLoadComplete: function () {
    this.ready = true;
  }



};