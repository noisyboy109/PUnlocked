Pushbox.Level6 = function(game){

	this.bmd = null;
	this.cmd = null;
	this.dmd = null;
	this.emd = null;
  // points arrays - one for x and one for y
  this.points = {
    'x': [240,540,540,240,540,540,540,240,240],
    'y': [20,20,320,320,320,20,320,320,19]
};

  this.points1 = {
  	'a':[300,600,600,300,300],
  	'b':[140,140,440,440,139]

  };

   this.points2 = {
  	'c':[500,800,800,500,500],
  	'd':[240,240,540,540,239]

  };

  this.points3 = {
  	'e':[600,900,900,600,600],
  	'f':[340,340,640,640,339]

  };

};

var player;
var playerspeed = 500;

Pushbox.Level6.prototype ={

	create: function(game){

	game.physics.startSystem(Phaser.Physics.ARCADE);

	//game.add.tileSprite(60, 60, game.world.width+120, game.world.height, 'background');
	player = game.add.sprite(game.world.width-900, game.world.height - 180, 'boy'); //create and position player
    game.physics.arcade.enable(player);
    player.body.allowGravity = false;
    player.body.isCircle = false;  // collision circle 
    player.body.setSize (53,55,2,0);
    player.body.fixedRotation=true; // do not rotate on collision
    //player.body.customSeparateX = true;
    //player.body.customSeparateY = true;
    game.camera.follow(player);

   
    // add some animations

    player.animations.add('up', [5, 6, 7, 8], 22,true);
    player.animations.add('down', [1, 2, 3, 4], 22,true);
    player.animations.add('left', [15, 16, 17, 18, 19, 20], 22,true);
    player.animations.add('right', [9, 10, 11, 12, 13 ,14], 22,true); 

	

	//enemy ai creation 

    this.increment = 0.9 / game.width;  
    this.i = 0;
    this.timer1Stopped = true;
    this.timer1 = null;

    this.increase01 = 2 / game.width;  
    this.o = 0;
    this.timer2Stopped = true;
    this.timer2 = null;

    this.increase02 = 2 / game.width;  
    this.p = 0;

    this.increase03 = 2 / game.width;  
    this.a = 0;

    // Somewhere to draw to 
    //enemy1
    this.bmd = this.add.bitmapData(this.game.width, this.game.height);
    this.bmd.addToWorld();
    // Draw the path
    for (var j = 0; j < 1; j += this.increment) {
      var posx = this.math.linearInterpolation(this.points.x, j);
      var posy = this.math.linearInterpolation(this.points.y, j);
      this.bmd.rect(posx, posy, 3, 3, 'rgba(245, 0, 0, 1)');
    }

    // create the monster sprite - we will make this sprite  
    // follow the motion path by using the plot function 
    enemy = game.add.sprite(0, game.world.height - 0, 'monster')
    game.physics.arcade.enable(enemy);
    enemy.body.allowGravity = false;
    enemy.body.isCircle = false;  // collision circle 
    enemy.animations.add('move',[0,1,2],3, true);

    // Somewhere to draw to 
    //enemyblink2
    this.cmd = this.add.bitmapData(this.game.width, this.game.height);
    this.cmd.addToWorld();
    // Draw the path
    for (var j = 0; j < 1; j += this.increment) {
      var posa = this.math.linearInterpolation(this.points1.a, j);
      var posb = this.math.linearInterpolation(this.points1.b, j);
      this.cmd.rect(posa, posb, 3, 3, 'rgba(245, 0, 0, 1)');
    }

    // create the monster sprite - we will make this sprite  
    // follow the motion path by using the plot function 
    enemy1 = game.add.sprite(0, game.world.height - 0, 'monster')
    game.physics.arcade.enable(enemy1);
    enemy1.body.allowGravity = false;
    enemy1.body.isCircle = false;  // collision circle 
    enemy1.animations.add('move',[0,1,2],3, true);

    // Somewhere to draw to 
    //enemyblink2.1
	this.dmd = this.add.bitmapData(this.game.width, this.game.height);
    this.dmd.addToWorld();
    // Draw the path
    for (var j = 0; j < 1; j += this.increment) {
      var posc = this.math.linearInterpolation(this.points2.c, j);
      var posd = this.math.linearInterpolation(this.points2.d, j);
      this.dmd.rect(posc, posd, 3, 3, 'rgba(245, 0, 0, 1)');
    }

     // Somewhere to draw to 
    //enemyblink2.2
	this.emd = this.add.bitmapData(this.game.width, this.game.height);
    this.emd.addToWorld();
    // Draw the path
    for (var j = 0; j < 1; j += this.increment) {
      var pose = this.math.linearInterpolation(this.points3.e, j);
      var posf = this.math.linearInterpolation(this.points3.f, j);
      this.emd.rect(pose, posf, 3, 3, 'rgba(245, 0, 0, 1)');
    }

    cursors = game.input.keyboard.createCursorKeys();    
	},

	checkOverlap: function(spriteA,spriteB){

    var boundA = spriteA.getBounds();
    var boundB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundA,boundB);
	},


	update: function(game){

		if (this.checkOverlap(player,enemy)||this.checkOverlap(player,enemy1)){

         player.reset(120,540);
    }
	
    if (cursors.left.isDown)
    {
		player.body.velocity.x = -playerSpeed;
        player.animations.play('left',10);
    }
    else if (cursors.right.isDown)
    {
		player.body.velocity.x = playerSpeed;
        player.animations.play('right',10);
    }

    else if (cursors.up.isDown)
    {
    	player.body.velocity.y = -playerSpeed;
        player.animations.play('up',10);
    }
    else if (cursors.down.isDown) {

    	player.body.velocity.y = playerSpeed;
        player.animations.play('down',10);
    }
    else{	
       player.body.velocity.x = 0;
       player.body.velocity.y = 0;
       player.loadTexture('boy', 0);
	}
				//ai
    if (this.timer1Stopped) {
        this.timer1Stopped = false;
        this.timer1 = this.game.time.create(true);
        this.timer1.loop(.01, this.plot, this);
        this.timer1.start();

    }

        if (this.timer2Stopped) {
        this.timer2Stopped = false;
        this.timer2 = this.game.time.create(true);
        this.timer2.loop(.2, this.plot1, this);
        this.timer2.start();

    }


	},

	plot: function() {
    
    var posx = this.math.linearInterpolation(this.points.x, this.i);
    var posy = this.math.linearInterpolation(this.points.y, this.i);
    enemy.x = posx;
    enemy.y = posy;
    this.i += this.increment;
   
    if (posy <19) {
      this.timer1.stop();
      this.timer1.destroy();
      this.i = 0;
      this.timer1Stopped = true;
    }

    if (posx===240){

        enemy.animations.play('move',5);
    }
  },

  plot1: function(){

  	var posa = this.math.linearInterpolation(this.points1.a, this.o);
    var posb = this.math.linearInterpolation(this.points1.b, this.o);
    enemy1.x = posa;
    enemy1.y = posb;
  	this.o += this.increase01;  

    if (posb<139){

    	this.plot1_2();
    }

    if (posa===300){

        enemy1.animations.play('move',5);
    }

  },

  plot1_2: function(){

  	var posc = this.math.linearInterpolation(this.points2.c, this.p);
    var posd = this.math.linearInterpolation(this.points2.d, this.p);
    enemy1.x = posc;
    enemy1.y = posd;
  	this.p += this.increase02;  

  	  if (posd<239){
      this.plot1_3();
    }  
  	
  },

    plot1_3: function(){

  	var pose = this.math.linearInterpolation(this.points3.e, this.a);
    var posf = this.math.linearInterpolation(this.points3.f, this.a);
    enemy1.x = pose;
    enemy1.y = posf;
  	this.a += this.increase03;  

  	  if (posf<339){
      this.timer2.stop();
      this.timer2.destroy();
      this.o = 0;
      this.p = 0;
      this.a = 0;
      this.timer2Stopped = true;
    }  
  	
  },

};