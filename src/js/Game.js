var Rules = {}
Rules.health= {}
Rules.health.increaseFood = function() {
	this.food += 5;
	if(this.food > 20) {
		this.food = 20;
	}
}
Rules.health.increaseHearts = function() {
	this.hearts += 5;
	if(this.hearts > 20) {
		this.hearts = 20;
	}
}
Rules.health.increaseHappy = function() {
	this.happy += 5;
	if(this.happy > 20) {
		this.happy = 20;
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
	window.setInterval(function() {
		if(_self.avatars[0].health.hearts > 0) {
			_self.avatars[0].health.hearts--;
		}
		_self.avatars[0].render();
	}, 5000);
	window.setInterval(function() {
		if(_self.avatars[0].health.happy > 0) {
			_self.avatars[0].health.happy--;
		}
		_self.avatars[0].render();
	}, 5000);
};

Game.prototype.increaseFood = function(avatar) {
	Rules.health.increaseFood.apply(avatar.health);
}

Game.prototype.increaseHearts = function(avatar) {
	Rules.health.increaseHearts.apply(avatar.health);
}

Game.prototype.increaseHappy = function(avatar) {
	Rules.health.increaseHappy.apply(avatar.health);
}