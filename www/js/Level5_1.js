Pushbox.Level5_1 = function(game){

	this.bmd = null;
    this.cmd = null;
  // points arrays - one for x and one for y
  this.points = {
    'x': [240,540,540,240,540,540,540,240,240],
    'y': [120,120,420,420,420,120,420,420,119]
};

this.points1 = {
    'a': [680,920,679],
    'b': [342,342,342]
};
};
	
Pushbox.Level5_1.prototype = {

	create: function(game){

	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.tileSprite(60, 60, game.world.width+120, game.world.height, 'background');

	 //the map
    map = game.add.tilemap('map5', 60, 60);
    map.addTilesetImage('tileset');
    layer = map.createLayer(0, game.world.width, game.world.height);
    layer = map.createLayer(0);
    layer.resizeWorld();
    map.setCollisionBetween(0,3);

	//spots or lalagyan ng box
    this.spot = this.add.physicsGroup();
    spot1 = new SpotPlatform(this.game,game.world.width-90, game.world.height-540, 'spots', this.spot);
    spot1.body.setSize(10,10,25,30,null);
    spot2 = new SpotPlatform(this.game,game.world.width-90, game.world.height-240, 'spots', this.spot);
    spot2.body.setSize(10,10,25,30,null);

    //box   
    box1 = new BoxPlatform(this.game, game.world.width-330, game.world.height-477, 'box');
    game.add.existing(box1);
    box2 = new BoxPlatform(this.game, game.world.width-330, game.world.height-297, 'box');
    game.add.existing(box2);
    
    box1.bloked = {up: false, down: false, left: false, right: false};

    //key
    this.key = this.add.physicsGroup();
    key1 = new KeyPlatform(this.game,game.world.width-600, game.world.height -440, 'redkey', this.key);

    //lock
    lock1 = game.add.sprite(game.world.width-420,game.world.height-378,'lock1');
    lock1.enableBody = true;
    game.physics.arcade.enable(lock1);
    lock1.body.setSize (56,56,0,0);
    lock1.body.immovable = true;

	//  Lives
    lives = game.add.group();
    game.add.text(game.world.width - 1000, 10, 'Life : ', { font: '34px Arial', fill: '#fff' });

     //  Text
    stateText = game.add.text(game.world.centerX,game.world.centerY,' ', { font: '84px Arial', fill: '#fff' });
    stateText.anchor.setTo(0.5, 0.5);
    stateText.visible = false;

    for (var i = 0; i < 3; i++) 
    {
        var heart = lives.create(game.world.width - 870 + (40 * i), 30, 'heart');
        heart.anchor.setTo(0.5, 0.5);
    }

	    //setup our player
    player = game.add.sprite(game.world.width-900, game.world.height - 180, 'boy'); //create and position player
    game.physics.arcade.enable(player);
    player.body.allowGravity = false;
    player.body.isCircle = false;  // collision circle 
    player.body.setSize (53,55,2,0);
    player.body.fixedRotation=true; // do not rotate on collision
    game.camera.follow(player);

   
    // add some animations

    player.animations.add('up', [5, 6, 7, 8], 22,true);
    player.animations.add('down', [1, 2, 3, 4], 22,true);
    player.animations.add('left', [15, 16, 17, 18, 19, 20], 22,true);
    player.animations.add('right', [9, 10, 11, 12, 13 ,14], 22,true); 

     // create our virtual game controller buttons
         
    buttonup = game.add.button(game.world.width-920, game.world.height-420, 'buttonup', null, this, 1, 0, 1, 0);
    buttonup.fixedToCamera = true;
    buttonup.alpha = 0.5;
    buttonup.events.onInputOver.add(function(){up=true;});
    buttonup.events.onInputOut.add(function(){up=false;});
    buttonup.events.onInputDown.add(function(){up=true;});
    buttonup.events.onInputUp.add(function(){up=false;});

   
    buttondown = game.add.button(game.world.width-920, game.world.height-220, 'buttondown', null, this, 0, 1, 0, 1);
    buttondown.fixedToCamera = true;
    buttondown.alpha = 0.5;
    buttondown.events.onInputOver.add(function(){down=true;});
    buttondown.events.onInputOut.add(function(){down=false;});
    buttondown.events.onInputDown.add(function(){down=true;});
    buttondown.events.onInputUp.add(function(){down=false;});



    buttonright = game.add.button(game.world.width-820, game.world.height-320, 'buttonright', null, this, 0, 1, 0, 1);
    buttonright.fixedToCamera = true;
    buttonright.alpha = 0.5;
    buttonright.events.onInputOver.add(function(){right=true;});
    buttonright.events.onInputOut.add(function(){right=false;});
    buttonright.events.onInputDown.add(function(){right=true;});
    buttonright.events.onInputUp.add(function(){right=false;});



    buttonleft = game.add.button(game.world.width-1019, game.world.height-320, 'buttonleft', null, this, 0, 1, 0, 1);
    buttonleft.fixedToCamera = true;
    buttonleft.alpha = 0.5;
    buttonleft.events.onInputOver.add(function(){left=true;});
    buttonleft.events.onInputOut.add(function(){left=false;});
    buttonleft.events.onInputDown.add(function(){left=true;});
    buttonleft.events.onInputUp.add(function(){left=false;});

    //other buttons
    undo = game.add.button(game.world.width-340,game.world.height-700,'undo',this.undo,this);
    undo.alpha = 0.6;
    restart = game.add.button(game.world.width-230,game.world.height-700,'restart',this.restart,this);
    restart.alpha = 0.6;
    pause = game.add.button(game.world.width-120,game.world.height-700,'pause',this.pause,this);
    pause.alpha = 0.6;

    home = game.add.button(game.world.width-435,game.world.height-700,'home',this.home,this);
    home.alpha = 0.6;


    this._fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };


     //enemy ai creation 

    this.increment = 0.9 / game.width;  
    this.i = 0;
    this.timer1Stopped = true;
    this.timer1 = null;

    this.increment1 = 0.9 / game.width;  
    this.o = 0;
    this.timer2Stopped = true;
    this.timer2 = null;

    // Somewhere to draw to
    this.bmd = this.add.bitmapData(this.game.width, this.game.height);
    this.bmd.addToWorld();
    // Draw the path
    for (var j = 0; j < 1; j += this.increment) {
      var posx = this.math.linearInterpolation(this.points.x, j);
      var posy = this.math.linearInterpolation(this.points.y, j);
      //his.bmd.rect(posx, posy, 3, 3, 'rgba(245, 0, 0, 1)');
    }

    // create the monster sprite - we will make this sprite  
    // follow the motion path by using the plot function 
    enemy = game.add.sprite(0, game.world.height - 0, 'monster')
    game.physics.arcade.enable(enemy);
    enemy.body.allowGravity = false;
    enemy.body.isCircle = false;  // collision circle 
    enemy.animations.add('move',[0,1,2],3, true);

    // Somewhere to draw to
    this.cmd = this.add.bitmapData(this.game.width, this.game.height);
    this.cmd.addToWorld();
    // Draw the path
    for (var j = 0; j < 1; j += this.increment) {
      var posx1 = this.math.linearInterpolation(this.points1.a, j);
      var posy1 = this.math.linearInterpolation(this.points1.b, j);
      //this.cmd.rect(posx1, posy1, 3, 3, 'rgba(245, 0, 0, 1)');
    }

    // create the monster sprite - we will make this sprite  
    // follow the motion path by using the plot function 
    enemy1 = game.add.sprite(0, game.world.height - 0, 'monster')
    game.physics.arcade.enable(enemy1);
    enemy1.body.allowGravity = false;
    enemy1.body.isCircle = false;  // collision circle 
    enemy1.animations.add('move',[0,1,2],3, true);

    cursors = game.input.keyboard.createCursorKeys();

	},

     home: function(){

        this.state.start('MainMenu');
    },


	checkOverlap: function(spriteA,spriteB){

    var boundA = spriteA.getBounds();
    var boundB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundA,boundB);
  },

  undo: function(){

    undo.kill();
    box1.reset(690,243);
    box2.reset(690,423);
    
  },

	update: function(game){


        game.physics.arcade.collide(player,box1);
        game.physics.arcade.collide(player,box2);
        game.physics.arcade.collide(box1,box2);
        game.physics.arcade.collide(layer,box1);
        game.physics.arcade.collide(layer,box2);
        game.physics.arcade.collide(player,layer);
        game.physics.arcade.collide(player,lock1);
        game.physics.arcade.collide(box1,lock1);
        game.physics.arcade.collide(box2,lock1);
      

      

    if (this.checkOverlap(player,enemy)||this.checkOverlap(player,enemy1)){

        this.lifeHandler();
    }   
    if(game.physics.arcade.collide(player,key1)){

            key1.kill();
            lock1.kill();
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
        this.timer2.loop(.01, this.plot1, this);
        this.timer2.start();
        }

    if((game.physics.arcade.overlap(box1,this.spot))
     &&(game.physics.arcade.overlap(box2,this.spot)))
         {
            spot1.kill();
            spot2.kill();
            this.levelComplete();
             
}
    
    if (left)
    {
        player.body.velocity.x =-playerSpeed;
        player.animations.play('left',10);
    }
    else if (right)
    {
        player.body.velocity.x = playerSpeed;
        player.animations.play('right',10);
    }

    else if (up)
    {
        player.body.velocity.y = -playerSpeed;
        player.animations.play('up',10);
    }
    else if (down) {

        player.body.velocity.y = playerSpeed;
        player.animations.play('down',10);
    }
    else{   
       player.body.velocity.x = 0;
       player.body.velocity.y = 0;
       player.loadTexture('boy', 0);
    }

   // if (cursors.left.isDown)
   //  {
   //      player.body.velocity.x =-playerSpeed;
   //      player.animations.play('left',10);
   //  }
   //  else if (cursors.right.isDown)
   //  {
   //      player.body.velocity.x = playerSpeed;
   //      player.animations.play('right',10);
   //  }

   //  else if (cursors.up.isDown)
   //  {
   //      player.body.velocity.y = -playerSpeed;
   //      player.animations.play('up',10);
   //  }
   //  else if (cursors.down.isDown) {

   //      player.body.velocity.y = playerSpeed;
   //      player.animations.play('down',10);
   //  }
   //  else{   
   //     player.body.velocity.x = 0;
   //     player.body.velocity.y = 0;
   //     player.loadTexture('boy', 0);
   //  }
   
	},

	lifeHandler: function(){

    live = lives.getFirstAlive();

    if (live)
    {
        live.kill();
        player.reset(120,540);
    
    }
    
     if (lives.countLiving() < 1)
    {
        player.kill();
        this.add.image(0,0,'background2',this);
        this.add.button(430,400,'restart',this.restart,this);
        this.add.button(530,400,'home',this.menu,this);
       
    }     

  },


	plot: function() {
    
    var posx = this.math.linearInterpolation(this.points.x, this.i);
    var posy = this.math.linearInterpolation(this.points.y, this.i);
    enemy.x = posx;
    enemy.y = posy;
    this.i += this.increment;
    if (posy <119) {
      this.timer1.stop();
      this.timer1.destroy();
      this.i = 0;
      this.timer1Stopped = true;
    }

    if (posx===240){

        enemy.animations.play('move',5);
    }
  },


    plot1: function() {
    
    var posx1 = this.math.linearInterpolation(this.points1.a, this.i);
    var posy1 = this.math.linearInterpolation(this.points1.b, this.i);
    enemy1.x = posx1;
    enemy1.y = posy1;
    this.o += this.increment1;
    if (posy1 >=679) {
      this.timer2.stop();
      this.timer2.destroy();
      this.o = 0;
      this.timer2Stopped = true;
    }

    if (posy1===342){

        enemy1.animations.play('move',5);
    }
  },
      levelComplete: function(){

        if(level == 20){

                level = level+1;
            }
            
        this.add.image(0,0,'background3',this);
        this.add.button(380,400,'restart',this.restart,this);
        this.add.button(480,400,'continue',this.startGame,this);
        this.add.button(580,400,'home',this.menu,this);
},



  	startGame: function(){

        this.state.start('Level51');
    },

    restart: function(){

        this.state.restart();
    },

     pause: function(){

        this.game.paused = true;
        // add proper informational text
        var pausedText = this.add.text(270, 250, "Game paused.\nTap anywhere to continue.", this._fontStyle);
        // set event listener for the user's click/tap the screen
        this.input.onDown.add(function(){
            // remove the pause text
            pausedText.destroy();
            // unpause the game
            this.game.paused = false;
        }, this);
    },

        menu: function(){

        this.state.start('MainMenu');
    },
};

BoxPlatform = function (game, x, y) {

        Phaser.Sprite.call(this,game,x,y,"box");
        game.physics.enable(this, Phaser.Physics.ARCADE);
        this.enableBody = true;
        this.anchor.x = 0.5;
        this.body.setSize(55,55,0,0,null);
        this.body.isCircle = false;
        this.collideWorldBounds = true;
        this.body.allowGravity = false;
        this.body.fixedRotation = true;
 };

 BoxPlatform.prototype = Object.create(Phaser.Sprite.prototype);
 BoxPlatform.prototype.constructor = BoxPlatform;

 BoxPlatform.prototype.update = function() {
        
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;
};

    SpotPlatform = function (game, x, y, key, group) {

        Phaser.Sprite.call(this, game, x, y,'spots');
        game.physics.arcade.enable(this);
        this.anchor.x = 0.5;
        this.body.allowGravity = false;
        this.body.immovable = true;
        group.add(this);

    };

SpotPlatform.prototype = Object.create(Phaser.Sprite.prototype);
SpotPlatform.prototype.constructor = SpotPlatform;

    KeyPlatform = function (game, x, y, key, group) {

        Phaser.Sprite.call(this, game, x, y, key);
        game.physics.arcade.enable(this);
        this.anchor.x = 0.5;
        this.body.allowGravity = false;
        this.body.immovable = true;
        group.add(this);

    };

KeyPlatform.prototype = Object.create(Phaser.Sprite.prototype);
KeyPlatform.prototype.constructor = KeyPlatform;


