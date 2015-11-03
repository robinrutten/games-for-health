var ActionPoints = function($elem) {
	this.$elem = $elem;
	this.amount = 100;
	this.increaseInterval = 5000;
	this.change();
};
ActionPoints.prototype = {
	render: function() {
		this.$elem.html(this.amount);
	},

	canDecrease: function(amount) {
		return this.amount - amount >= 0;
	},

	change: function() {
		$('body').trigger('actionPointsChange', this.amount);
		this.render();
	},

	increase: function(amount) {
		this.amount += amount;
		this.change();
		return this;
	},
	decrease: function(amount) {
		if(!this.canDecrease(amount)) {
			throw new Error('cannot decrease');
		}
		this.amount -= amount;
		this.change();
		return this;
	}
};