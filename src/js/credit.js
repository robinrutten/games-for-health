var Credit = function() {
	var amount = 0;
};
Credit.prototype = {
	increaseCredit: function(amount) {
		this.amount += amount;
		return this;
	},
	decreaseCredit: function(amount) {
		this.amount -= amount;
		return this;
	}
};