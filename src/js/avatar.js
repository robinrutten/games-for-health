var Avatar = function(name, gender, hairColor, bodyColor, pantsColor) {
	this.name = name;
	this.gender = gender,

	this.hairColor = hairColor;
	this.bodyColor = bodyColor;
	this.pantsColor = pantsColor;
};

Avatar.prototype = {

	render: function() {
		if(this.gender === 'female') {
			return this._renderFemale();
		}
		return this._renderMale();
	},

	_renderMale: function() {
		var svg = '<svg>';
		svg += '';
		svg += '';
		return svg;
	},
	_renderFemale: function(hairColor, body, pantsColor) {
		var svg = '';
		svg += '';
		svg += '';
		return svg;
	}

};