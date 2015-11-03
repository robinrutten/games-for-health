var Health = function() { 
	this.hearts = 20;
	this.food = 20;
	this.happy = 20;

};

Health.prototype.render = function(element) {
	$(element).find("#hearts").html(this.hearts);
	$(element).find("#food").html(this.food);
	$(element).find("#happy").html(this.happy);
	element.show();
}

