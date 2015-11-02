var Game = function() {
	this.avatars = [];
	this.time = window.getTime();
};

Game.prototype.addAvatar = function(avatar) {
	this.avatars.push(avatar);

	
};


