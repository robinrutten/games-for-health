var Rules = {}
Rules.health= {}
Rules.health.feed = function() {
	this.food += 5;
	if(this.food > 20) {
		this.food = 20;
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
		if(_self.avatars[0].health.food > 0) {
			_self.avatars[0].health.food--;
		}
		_self.avatars[0].render();
	}, 5000);
};

Game.prototype.feed = function(avatar) {
	Rules.health.feed.apply(avatar.health);
}