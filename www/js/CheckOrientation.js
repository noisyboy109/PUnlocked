Pushbox.CheckOrientation = function(game){};

Pushbox.CheckOrientation.prototype = {

	create: function(){


	},

	update: function(){

		if (Pushbox.orientated)

			this.state.start('Preloader');
	}
};