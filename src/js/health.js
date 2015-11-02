var Health = function() { 
	this.hearts = 5;
	this.food = 5;
	this.happy = 5;

};

Health.prototype.render = function(element) {
	$(element).find("#hearts").html(this.hearts);
	$(element).find("#food").html(this.food);
	$(element).find("#happy").html(this.happy);
}

