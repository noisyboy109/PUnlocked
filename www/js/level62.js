Pushbox.Level62 = function(game){

      this.bmd = null;
  // points arrays - one for x and one for y
  this.points = {
    'x': [600,900,900,600,600],
    'y': [180,180,480,480,180]
};

};
var playerSpeed = 200;
var player;
var lock2;
//var box1,box2;

Pushbox.Level62.prototype ={

	create: function(game){

	game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.startSystem(Phaser.Physics.P2JS);
	this.add.tileSprite(60, 60, game.world.width+120, game.world.height, 'background');

	 //the map
    map = game.add.tilemap('map6', 60, 60);
    map.addTilesetImage('tileset');
    layer = map.createLayer(0, game.world.width, game.world.height);
    layer = map.createLayer(0);
    layer.resizeWorld();
    map.setCollisionBetween(0,3);
    //game.physics.p2.convertTilemap(map, layer);

    //box
    box = this.add.physicsGroup();
    //box = game.add.group();
    //game.physics.enable(box, Phaser.Physics.ARCADE);
    //box.enableBody = true;
    var box1 = new BoxPlatform(this.game, 500, 450, 'box', box);
    var box2 = new BoxPlatform(this.game, 600, 450, 'box', box);

    //lock
    lock2 = game.add.sprite(game.world.width-238,game.world.height-118,'lock2');
    lock2.enableBody = true;
    game.physics.arcade.enable(lock2);
    lock2.body.immovable = true;




     //setup our player
    player = game.add.sprite(game.world.width-920, game.world.height - 350, 'boy'); //create and position player
    game.physics.arcade.enable(player, true);
    player.body.allowGravity = false;
    player.body.isCircle = false;
    player.body.setSize(55,55,0,0, null);   
    player.body.fixedRotation=true; // do not rotate on collision
    this.camera.follow(player);

   
    // add some animations

    player.animations.add('up', [5, 6, 7, 8], 22,true);
    player.animations.add('down', [1, 2, 3, 4], 22,true);
    player.animations.add('left', [15, 16, 17, 18, 19, 20], 22,true);
    player.animations.add('right', [9, 10, 11, 12, 13 ,14], 22,true); 

    this.increment = 1.5 / game.width;  
    this.i = 0;
    this.timer1Stopped = true;
    this.timer1 = null;

    // Somewhere to draw to
    this.bmd = this.add.bitmapData(this.game.width, this.game.height);
    this.bmd.addToWorld();
    // Draw the path
    for (var j = 0; j < 1; j += this.increment) {
      var posx = this.math.linearInterpolation(this.points.x, j);
      var posy = this.math.linearInterpolation(this.points.y, j);
      //this.bmd.rect(posx, posy, 3, 3, 'rgba(245, 0, 0, 1)');
    }

    // create the monster sprite - we will make this sprite  
    // follow the motion path by using the plot function 
    enemy = game.add.sprite(0, game.world.height - 0, 'monster')
    game.physics.arcade.enable(enemy);
    enemy.body.allowGravity = false;
    enemy.body.isCircle = false;  // collision circle 
    enemy.animations.add('move',[0,1,2],3, true);

    cursors = game.input.keyboard.createCursorKeys();
	},

      

	update: function(game){

        //box1.body.velocity.x = 0;		
 		game.physics.arcade.collide(player,layer);
        game.physics.arcade.collide(player,box);
		game.physics.arcade.collide(box);                
		game.physics.arcade.collide(box,layer);
        game.physics.arcade.collide(player,lock2);
        
game.physics.arcade.collide(player,box, function(player,box) {  
if (box.body.touching.left || box.body.touching.right) {    
    console.log('hello'); 
}  
else if (box.body.touching.up || box.body.touching.down) {    
 
 console.log('hello');    
}});


       if (this.timer1Stopped) {
        this.timer1Stopped = false;
        this.timer1 = this.game.time.create(true);
        this.timer1.loop(.01, this.plot, this);
        this.timer1.start();
    }

		if (cursors.left.isDown)
    {
		player.body.velocity.x =-playerSpeed;
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

    if (this.checkOverlap(player,enemy)){

        console.log('awawawaw');
    }   

	

	},

    plot: function() {
    
    var posx = this.math.linearInterpolation(this.points.x, this.i);
    var posy = this.math.linearInterpolation(this.points.y, this.i);
    enemy.x = posx;
    enemy.y = posy;
    this.i += this.increment;
    if (posy <180) {
      this.timer1.stop();
      this.timer1.destroy();
      this.i = 0;
      this.timer1Stopped = true;
    }

    if (posx===600){

        enemy.animations.play('move',5);
    }
  },


    checkOverlap: function(spriteA,spriteB){

    var boundA = spriteA.getBounds();
    var boundB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundA,boundB);
  },

  render: function(game){

    
  }

};

     BoxPlatform = function (game, x, y, key, group) {

        if (typeof group === 'undefined') { group = game.world; }
        Phaser.Sprite.call(this,game,x,y,key);
        game.physics.enable(this, Phaser.Physics.ARCADE);
        this.enableBody = true;
        this.anchor.x = 0.5;
        this.body.isCircle = false;
        this.collideWorldBounds = true;
        this.body.allowGravity = false;
        this.body.fixedRotation = true;
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;
        group.add(this);
 };

 BoxPlatform.prototype = Object.create(Phaser.Sprite.prototype);
 BoxPlatform.prototype.constructor = BoxPlatform;


 
