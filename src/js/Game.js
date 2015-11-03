var Rules = {}
Rules.feed = function() {
	this.food -= 5;
	if(this.food < 0) {
		this.food = 0;
	}
}

var Game = function() {
	this.avatars = [];
	this.time = new Date().getTime();
};

Game.prototype.addAvatar = function(avatar) {
	this.avatars.push(avatar);
	var _self = this;
	window.setInterval(function() {
		_self.avatars[0].health.food++;
		_self.avatars[0].render();
	}, 5000);
};

Game.prototype.feed = function(avatar) {
	Rules.feed.apply(avatar.health);
}