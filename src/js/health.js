var Health = function() { 
	this.hearts = 20;
	this.food = 20;
	this.happy = 20;

};

Health.prototype.getType = function(score) {
	if(score < 5) {
		return 'score-1';
	}
	if(score < 10) {
		return 'score-2';
	}
	if(score < 15) {
		return 'score-3'
	}
	if(score < 20) {
		return 'score-4';
	}
	return 'score-5';
};

Health.prototype.renderScore = function(selector, score) {
	$(selector).html(score);
	$(selector).closest('li').removeClass (function (index, css) {
	    return (css.match (/(^|\s)score-\S+/g) || []).join(' ');
	}).addClass(this.getType(score));
}


Health.prototype.render = function(element) {
	this.renderScore("#hearts", this.hearts);
	this.renderScore("#food", this.food);
	this.renderScore("#happy", this.happy);
	element.show();
}

