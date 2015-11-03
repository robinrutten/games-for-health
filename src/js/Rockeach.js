var RockeachValue = function(name) {
	this.name = name;
	this.value = 0;
}

var Rockeach = function() {

	try {
		this.values = JSON.parse(localStorage.getItem('Rockeach')) || [];
	} catch (e) {
		this.values = [];
		for (var i in Rockeach.names) {
			this.values.push(new RockeachValue(Rockeach.names[i]))	
		}
		this.persist();
	}
}

Rockeach.prototype.persist = function() {
	localStorage.setItem('Rockeach', JSON.stringify(this.values));
}

Rockeach.prototype.score = function(name) {
	for (var i in this.values) {
	
		if(this.values[i].name === name) {
			this.values[i].value++;
		}
	}
	this.persist();
} 

Rockeach.names = [
	"True Friendship",
	"Mature Love",
	"Self-Respect",
	"Happiness",
	"Inner Harmony",
	"Equality",
	"Freedom",
	"Pleasure",
	"Social Recognition",
	"Wisdom",
	"Salvation",
	"Family Security",
	"National Security",
	"A Sense of Accomplishment",
	"A World of Beauty",
	"A World at Peace",
	"A Comfortable Life",
	"An Exciting Life"];
