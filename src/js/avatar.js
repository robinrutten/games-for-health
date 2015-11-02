var Avatar = function(name, gender, hairColor, bodyColor, pantsColor) {
	this.name = name;
	this.gender = gender,

	this.hairColor = hairColor;
	this.bodyColor = bodyColor;
	this.pantsColor = pantsColor;
	this.glasses = true;

	this.health = new Health();

	this.statusBar = null;
};

Avatar.prototype = {

	toggleGender : function() {
		if(this.gender === 'female') {
			this.gender = 'male';
		} else {
			this.gender = 'female';
		}
		
	},

	renderStatus : function() {
		if(this.statusBar) {
			this.health.render(this.statusBar);
		}
	},


	render: function() {
		this.renderStatus();

		if(this.gender === 'female') {
			return this._renderFemale();
		}
		return this._renderMale();
	},

	_renderMale: function() {
		var svg = '<svg height="100%" width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 350 519.9" enable-background="new 0 0 350 519.9" xml:space="preserve">';
		svg += '<path id="Broek" fill="'+this.pantsColor+'" d="M219.7,515.9c0,0,45.7-52.8,45.7-158.3c0-158.3-91.4-263.8-91.4-263.8S82.6,199.3,82.6,357.6c0,105.5,45.7,158.3,45.7,158.3H219.7z"/>';
		svg += '<path id="Hand_Rechts_3_" fill="#FDD4BC" d="M294.4,310.9c-6.1-15.9,0.4-33.2,14.5-38.6c14.1-5.5,30.6,3,36.7,18.9c6.1,15.9-0.4,33.2-14.6,38.7C317,335.2,300.5,326.8,294.4,310.9z"/>';
		svg += '<path id="Hand_Rechts_2_" fill="#FDD4BC" d="M5,290.5c6.9-15.6,23.7-23.2,37.6-17.1c13.9,6.2,19.5,23.8,12.6,39.3c-6.9,15.6-23.8,23.2-37.6,17C3.7,323.6-2,306,5,290.5z"/>';
		svg += '<path id="Shirt" fill="'+this.bodyColor+'" d="M314.8,259.4c0,0-41.2-59-92.3-87.3C198.8,122.4,174,93.8,174,93.8s-24,27.7-47.3,75.9c-53.2,27.1-97,89.7-97,89.7l35.7,48.5c0,0,11.1-17.3,26.8-38.3c-5.8,27-9.5,56.4-9.5,88h182.8c0-29-3.1-56.3-8.1-81.5c13.1,17.9,21.9,31.8,21.9,31.8L314.8,259.4z"/>';
		svg += '<path id="Gezicht" fill="#FDD4BC" d="M261.3,78.9c3.1,44.7-34.7,83.8-84.4,87.2c-49.7,3.5-92.6-30-95.7-74.7c-3.1-44.7,34.7-83.8,84.4-87.2C215.4,0.8,258.2,34.2,261.3,78.9z"/>';
		svg += '<path id="Haar" fill="'+this.hairColor+'" d="M258.1,73.5c-27.5,0-38.2-32.4-38.2-32.4S198.5,54,171.3,54c-27.1,0-47.6,8.8-47.6,8.8S93.5,82.5,78.4,82.5c0,0,15.5-85.5,98.6-79C260.2,10,258.1,73.5,258.1,73.5z"/>';
		svg += '<path id="Oog_Links" d="M147,79c-3.2,0-5.9,2.6-5.9,5.9c0,3.2,2.6,5.9,5.9,5.9c3.2,0,5.9-2.6,5.9-5.9C152.9,81.6,150.3,79,147,79z"/>';
		svg += '<path id="Oog_Rechts" d="M201.3,90.7c3.2,0,5.8-2.6,5.8-5.9c0-3.2-2.6-5.9-5.8-5.9c-3.3,0-5.9,2.6-5.9,5.9C195.4,88.1,198.1,90.7,201.3,90.7z"/>';
		if(this.glasses) {
			svg += '<path id="Bril" d="M261.3,74.6h-22.7c-0.6-4.3-4.3-7.7-8.8-7.7H184c-2.3,0-4.5,0.9-6.1,2.4h-6.7c-1.6-1.7-3.9-2.8-6.5-2.8h-46.1c-4.6,0-8.4,3.6-8.8,8.1H81.4V85h28.4v10c0,4.9,4,8.9,8.9,8.9h46.1c4.9,0,8.9-4,8.9-8.9V79.8h1.5v15.6c0,4.9,4,8.9,8.9,8.9h45.9c4.9,0,8.9-4,8.9-8.9V85h22.6V74.6z M163.2,93.4h-43V77h43V93.4z M228.3,93.9h-42.8V77.4h42.8V93.9z"/>';
		}
		svg += '<path id="Lijnen" d="M347.5,290.4c-3.3-8.7-9.9-15.7-17.9-19.3c-5.5-2.4-11.4-3.1-17-2l7.1-9.6l-1.6-2.3c-0.2-0.3-18.4-26.1-45.1-51.6c-16.3-15.6-32.2-27.7-47.5-36.3c-0.8-1.6-1.5-3.1-2.3-4.6c-1.2-2.4-2.3-4.7-3.5-6.9c8.1-4.5,15.6-10.2,22.1-16.9c16.7-17.3,25.1-39.4,23.5-62.1c-1.6-22.8-12.9-43.5-31.9-58.3c-18.9-14.7-43-21.9-68.1-20.1C113.5,3.9,74,44.9,77.2,91.8c2.1,30.4,21.7,55.8,49.4,69c-0.6,1.3-1.3,2.5-1.9,3.8c-0.3,0.7-0.7,1.4-1,2.1c-16.8,8.7-34.2,21.7-52.2,38.9c-26.7,25.5-44.9,51.4-45.1,51.6l-1.6,2.4l7.2,9.8c-3.3,0.1-6.7,0.7-10,2c-8.2,3.2-15.1,9.9-18.8,18.4c-3.5,8-4.1,16.7-1.6,24.6c2.6,8,8,14.1,15.2,17.3c3.5,1.5,7.2,2.3,10.9,2.3c4,0,8.2-0.9,12.1-2.7c7.6-3.4,13.7-9.7,17.2-17.7c1-2.3,1.8-4.7,2.3-7l6.2,8.5l3.1-4.9c4-6.2,9.6-14.5,16.1-23.8c-3.9,22.2-6.2,46.1-6.2,71.3c0,55.2,12.6,95.9,23.2,120.3c11.5,26.6,23,40,23.5,40.6l1.2,1.4h95.1l1.2-1.4c0.5-0.6,12-14,23.5-40.6c10.6-24.4,23.2-65.1,23.2-120.3c0-22.8-1.9-44.5-5.1-64.8c4.6,6.6,8.5,12.6,11.6,17.3l3.1,4.9l11.2-15.2c0.1,4,0.9,8,2.4,11.8c3.1,8.1,8.9,14.7,16.3,18.5c4.3,2.2,8.8,3.3,13.3,3.3c3.3,0,6.5-0.6,9.7-1.8C347,325.8,354,307.3,347.5,290.4z M249.2,258.7c0.1,0.6,0.3,1.2,0.5,1.8c0.1,0.4,0.2,0.9,0.3,1.4c0.4,1.6,0.8,3.3,1.2,4.9c0.1,0.5,0.2,1,0.3,1.5c0.4,1.6,0.7,3.3,1.1,4.9c0.1,0.5,0.2,0.9,0.3,1.4c0.2,1,0.4,2,0.6,3c0.1,0.7,0.3,1.4,0.4,2.1c0.1,0.4,0.2,0.8,0.2,1.2c0.3,1.8,0.7,3.6,1,5.4c0.1,0.4,0.1,0.8,0.2,1.2c0.3,1.8,0.6,3.7,0.9,5.5c0.1,0.5,0.1,0.9,0.2,1.4c0.3,1.8,0.6,3.6,0.8,5.4c0.1,0.5,0.1,1,0.2,1.5c0.3,1.8,0.5,3.6,0.7,5.4c0.1,0.5,0.1,1.1,0.2,1.6c0.2,1.8,0.4,3.6,0.6,5.4c0.1,0.6,0.1,1.3,0.2,1.9c0.2,1.7,0.4,3.4,0.5,5.2c0.1,0.7,0.1,1.4,0.2,2.2c0.1,1.7,0.3,3.4,0.4,5c0.1,0.7,0.1,1.5,0.1,2.2c0.1,1.7,0.2,3.4,0.3,5.1c0.1,1,0.1,2,0.1,3c0.1,1.4,0.1,2.9,0.2,4.3c0,1.3,0.1,2.6,0.1,4c0,1.2,0.1,2.3,0.1,3.5c0,1.8,0,3.7,0.1,5.5H86.6c0.1-14.5,0.9-28.5,2.4-41.9c1.6-14.9,4-29.1,6.9-42.6c1.4-6.5,2.9-12.8,4.5-19c8.3-31.4,19.1-58.3,29.2-79.4c0.7-1.5,1.4-2.9,2.1-4.4c0.5-1.1,1.1-2.2,1.6-3.3c0-0.1,0.1-0.2,0.1-0.3c0.2-0.3,0.3-0.6,0.5-0.9c3,1.1,6.1,2.1,9.2,3c8.5,2.3,17.4,3.5,26.7,3.5c2.4,0,4.9-0.1,7.3-0.3c7.6-0.5,15-1.9,22.1-3.9c4-1.2,7.9-2.6,11.6-4.2c0.6-0.2,1.1-0.5,1.7-0.7c0.1,0.2,0.2,0.3,0.2,0.5c0.2,0.5,0.5,0.9,0.7,1.4c0.1,0.1,0.1,0.2,0.2,0.3c0.2,0.5,0.5,1,0.7,1.5c0.3,0.7,0.7,1.4,1,2c0.2,0.4,0.4,0.8,0.6,1.2c0.4,0.8,0.8,1.7,1.2,2.5c0.2,0.5,0.5,1,0.7,1.5c0.4,0.9,0.8,1.8,1.3,2.7c0,0.1,0.1,0.2,0.1,0.3c0.2,0.4,0.4,0.8,0.6,1.2c0.4,0.9,0.8,1.8,1.3,2.7c0.2,0.5,0.5,1,0.7,1.6c0.4,0.9,0.8,1.8,1.2,2.8c0.2,0.6,0.5,1.1,0.7,1.7c0.4,0.9,0.8,1.8,1.2,2.8c0.3,0.6,0.5,1.2,0.8,1.8c0.4,0.9,0.8,1.8,1.2,2.7c0.3,0.7,0.6,1.3,0.8,2c0.4,0.9,0.7,1.8,1.1,2.7c0.3,0.7,0.6,1.4,0.9,2.1c0.3,0.9,0.7,1.7,1,2.6c0.3,0.8,0.6,1.6,0.9,2.4c0.3,0.8,0.6,1.7,1,2.5c0.3,0.9,0.7,1.7,1,2.6c0.3,0.8,0.6,1.6,0.9,2.4c0.3,0.9,0.7,1.8,1,2.8c0.3,0.8,0.5,1.5,0.8,2.3c0.4,1,0.7,2,1.1,3.1c0.2,0.7,0.5,1.4,0.7,2.1c0.4,1.1,0.8,2.2,1.1,3.3c0.2,0.7,0.5,1.4,0.7,2.1c0.4,1.2,0.8,2.3,1.1,3.5c0.2,0.6,0.4,1.3,0.6,1.9c0.4,1.3,0.8,2.5,1.2,3.8c0.2,0.6,0.3,1.2,0.5,1.8c0.4,1.3,0.8,2.7,1.2,4.1c0.2,0.6,0.3,1.1,0.5,1.7c0.4,1.4,0.8,2.8,1.2,4.3c0.1,0.5,0.3,1,0.4,1.5c0.4,1.5,0.8,3,1.2,4.6c0.1,0.4,0.2,0.9,0.3,1.3C248.7,256.6,249,257.7,249.2,258.7z M85.2,91.2c-3-42.4,33.2-79.7,80.7-83c2.3-0.2,4.6-0.2,6.9-0.2c20.6,0,40.2,6.5,55.8,18.7c17.2,13.4,27.4,32.1,28.8,52.5v0c1.4,20.5-6.1,40.4-21.3,56c-5.9,6.1-12.6,11.2-20,15.4c-2.3,1.3-4.7,2.5-7.2,3.6c0,0,0,0,0,0c-3,1.4-6.2,2.6-9.4,3.6c-6.2,2-12.8,3.4-19.5,4.1c-1.1,0.1-2.2,0.2-3.4,0.3c-2.3,0.2-4.5,0.2-6.8,0.2c-2.5,0-5-0.1-7.4-0.3c-6.8-0.5-13.3-1.8-19.6-3.6c-1.8-0.5-3.5-1.1-5.2-1.7h0c-2.5-0.9-5-2-7.4-3.1C105,141.7,87.1,118.7,85.2,91.2z M53.3,311.9c-3.1,7.1-8.5,12.6-15.2,15.6c-6.6,3-13.6,3.1-19.8,0.4c-6.2-2.7-10.8-8-13-14.9c-2.2-7-1.7-14.7,1.4-21.7l0,0c3.3-7.6,9.4-13.5,16.6-16.3c3-1.1,6-1.7,9-1.7c0.8,0,1.7,0,2.5,0.1L56,302C55.6,305.3,54.8,308.7,53.3,311.9z M65.1,300.9l-5.5-7.5l-16-21.8l-9-12.3c7.8-10.6,41.9-54.8,83.1-80.1C107,203.2,96,233.2,88.4,267.8C77.9,281.9,69.5,294.4,65.1,300.9z M239,474.4c-9,20.9-18.1,33.5-21.2,37.5h-87.6c-3.1-4-12.2-16.6-21.3-37.5c-10.1-23.4-22-62.2-22.3-114.8h174.8C261.1,412.2,249.1,451,239,474.4z M260.9,274.4c-7.3-35.9-18.3-67.1-29.3-92c39.1,25.6,70.8,66.9,78.3,77l-30.5,41.5C275.7,295.4,269.2,285.7,260.9,274.4z M330.4,327.9c-6.3,2.4-13.3,2-19.7-1.4c-6.5-3.3-11.6-9.2-14.4-16.4v0c-2-5.3-2.6-11-1.8-16.3l14.2-19.3c0.3-0.2,0.7-0.3,1-0.5c2.6-1,5.4-1.5,8.2-1.5c3.4,0,6.8,0.7,10.1,2.2c7.1,3.1,12.8,9.4,15.8,17.1C349.5,306.7,343.5,322.9,330.4,327.9z"/></svg>';
		svg += '</svg>';
		return svg;
	},
	_renderFemale: function(hairColor, body, pantsColor) {
		var svg = '<svg version="1.1" width="100%" height="100%" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 353.1 528.3" enable-background="new 0 0 353.1 528.3" xml:space="preserve">';
		svg += '<path id="Hand_Rechts" fill="#FDD4BC" d="M297.1,313.9c-6.2-16,0.4-33.5,14.7-39c14.3-5.5,30.9,3,37,19c6.2,16.1-0.4,33.5-14.7,39C319.8,338.4,303.3,329.9,297.1,313.9z"/>';
		svg += '<path id="Hand_Links" fill="#FDD4BC" d="M5,293.3c7-15.7,24-23.4,37.9-17.2c14,6.2,19.7,24,12.7,39.7c-7,15.7-24,23.4-37.9,17.2C3.7,326.7-2,308.9,5,293.3z"/>';
		svg += '<path id="Broek" fill="'+this.pantsColor+'" d="M220.1,524.3c0,0,46.2-53.4,46.2-160.2c0-160.2-92.5-267-92.5-267s-92.5,106.8-92.5,267c0,106.8,46.2,160.2,46.2,160.2H220.1z"/>';
		svg += '<path id="Shirt" fill="'+this.bodyColor+'" d="M317.7,261.9c0,0-43.6-62.4-96.9-90c-23.3-47.6-46.9-74.8-46.9-74.8s-23.5,27.2-46.9,74.7c-53.4,27.6-97.1,90.1-97.1,90.1l36,48.9c0,0,10.4-16.2,25.2-36.2c-5.9,27.4-9.7,57.3-9.7,89.4h185c0-32-3.7-61.8-9.6-89.1c14.7,19.9,24.9,35.9,24.9,35.9L317.7,261.9z"/>';
		svg += '<path id="Gezicht_1_" fill="#FDD4BC" d="M262.3,82c3.2,45.2-35.1,84.8-85.4,88.3C126.5,173.8,83.2,140,80,94.8C76.9,49.5,115.1,10,165.4,6.5C215.8,3,259.2,36.8,262.3,82z"/>';
		svg += '<path id="Oog_Links_1_" d="M156.2,88c0,3.3-2.6,5.9-5.9,5.9c-3.3,0-5.9-2.6-5.9-5.9c0-3.3,2.7-5.9,5.9-5.9C153.5,82.1,156.2,84.8,156.2,88z"/>';
		svg += '<path id="Oog_Rechts_1_" d="M203.6,88c0,3.3-2.7,5.9-5.9,5.9c-3.3,0-5.9-2.6-5.9-5.9c0-3.3,2.6-5.9,5.9-5.9C201,82.1,203.6,84.8,203.6,88z"/>';
		svg += '<path id="Haar" fill="'+this.hairColor+'" d="M224.9,75.7c-10.2-12-18.1-30.2-15.5-38.8c-15.6,15.6-18.7,7.1-44.5,8.8C61.5,53,128.4,166.9,128.4,166.9l-9.9,41.1l-31.3-9.1c-1.6-11.3-8.1-98-8.1-115c0,0,9.3-77.9,91.9-77.9c84.6,0,89.7,71.5,89.7,71.5l-8.1,113L237.9,204l-25.4-4.8C212.5,199.2,228,122.3,224.9,75.7"/>';
		svg += '<path id="LIjnen" d="M350.7,293.2c-3.4-8.8-10-15.8-18.1-19.4c-5.6-2.5-11.5-3.2-17.2-2l7.2-9.8l-1.6-2.3c-0.2-0.3-18.5-26.4-45.5-52.1c-5.7-5.5-11.4-10.5-17.1-15.2l6.4-89.3c1.3-6.6,1.8-13.4,1.5-20.2l0.4-4.9l0-0.4l0-0.4c-0.1-0.8-1.5-19.7-14.1-38.7C231.5,6.7,196.6,0,171,0C125.6,0,101.4,22.7,89,41.7C75.8,62.1,73.2,82.4,73.1,83.2l0,0.7c0,17.8,6.4,102.4,8.1,115.3c-3,2.7-6,5.4-9,8.3c-27,25.7-45.3,51.8-45.5,52.1L25,262l7.3,9.9c-3.4,0.1-6.8,0.7-10.1,2c-8.3,3.2-15.2,10-19,18.5c-3.6,8-4.1,16.8-1.6,24.8c2.6,8,8,14.3,15.3,17.5c3.5,1.6,7.2,2.3,11,2.3c4.1,0,8.2-0.9,12.2-2.7c7.6-3.4,13.8-9.8,17.3-17.8c1-2.4,1.8-4.8,2.3-7.2l6.3,8.6l3.1-4.9c3.7-5.7,8.6-13.2,14.5-21.5c-3.9,22.6-6.3,46.8-6.3,72.5c0,55.9,12.8,97,23.5,121.7c11.7,27,23.3,40.5,23.8,41.1l1.2,1.4H222l1.2-1.4c0.5-0.6,12.1-14.1,23.8-41.1c10.7-24.7,23.4-65.9,23.4-121.7c0-25.5-2.4-49.7-6.3-72.2c5.7,8.2,10.6,15.5,14.3,21.1l3.1,4.9l11.3-15.3c0.1,4,0.9,8.1,2.4,12c3.2,8.2,9,14.8,16.4,18.7c4.3,2.2,8.9,3.4,13.4,3.4c3.3,0,6.6-0.6,9.7-1.8C350.1,328.9,357.2,310.2,350.7,293.2z M80.7,116.7c-0.9-14.8-1.6-27.3-1.6-32.7c0,0,9.3-77.9,91.9-77.9c84.6,0,89.7,71.5,89.7,71.5l-3.4,46.6l-4.6,63.7l-0.2,2.6l-4.4,4l-9.2,8.5l-1,1l-0.8-0.1l-4.7-0.9l-2.3-0.4l-17.6-3.3c0,0,2-9.9,4.4-24.7c0.1-0.3,0.1-0.7,0.2-1c0.2-1.1,0.4-2.2,0.5-3.4c0.2-1.3,0.4-2.6,0.6-3.9c0.1-0.9,0.3-1.9,0.4-2.8c0-0.3,0.1-0.5,0.1-0.8c0.1-0.8,0.3-1.7,0.4-2.6c0.4-2.4,0.7-4.9,1.1-7.5c-1.3,0.8-2.5,1.6-3.8,2.3c-0.6,0.3-1.2,0.6-1.8,1c-0.3,0.2-0.7,0.4-1,0.5c-0.8,0.4-1.7,0.8-2.6,1.2c-0.6,0.3-1.2,0.6-1.8,0.9c-1.7,0.7-3.4,1.4-5.1,2.1c-4.8,1.8-9.7,3.3-14.8,4.3c-4.2,0.8-8.4,1.4-12.7,1.7c-2.3,0.2-4.6,0.2-6.8,0.2c-5.1,0-10.1-0.4-14.9-1.2c-5.2-0.8-10.3-2.1-15.2-3.7c-0.8-0.3-1.7-0.6-2.5-0.9c-0.6-0.2-1.3-0.5-1.9-0.7c-1.3-0.5-2.5-1-3.7-1.5c-0.4-0.2-0.7-0.3-1.1-0.5c-0.1-0.3-0.3-0.6-0.4-0.9c-0.1,0.2-0.2,0.4-0.3,0.5c-2.9-1.3-5.6-2.8-8.3-4.5c2,4.5,3.9,8.1,5.2,10.4c0.4,0.7,0.7,1.3,1,1.8c0.1,0.1,0.1,0.2,0.2,0.3c0.2,0.4,0.4,0.6,0.5,0.8c0.1,0.2,0.2,0.3,0.2,0.3l-2.4,10l-0.8,3.4l-2.5,10.4l-4.2,17.2l-2.7-0.8l-1.9-0.6l-3.9-1.1l-1.9-0.6l-15.8-4.6l-5.1-1.5c-0.1-1-0.3-2.5-0.5-4.4C85.2,180.8,82.5,144.5,80.7,116.7z M133,173.3c2.3-1.1,4.7-2.1,7-3.1c9.4,2.8,19.4,4.4,29.7,4.4c2.4,0,4.9-0.1,7.4-0.3c9.3-0.6,18.4-2.5,27-5.4c2.4,0.9,4.8,1.9,7.2,2.9c-2.5,15.4-4.6,26-4.6,26.2l-1.2,6l27.3,5.2c5.6,14.5,11,30.6,15.6,48.1c1.6,6.2,3.2,12.6,4.6,19.2c5.5,25.5,9.1,57.6,9.4,87.6H85.4c0.3-30.2,3.9-62.3,9.5-88c1.4-6.6,3-13,4.6-19.2c4.2-15.9,9-30.7,14.1-44.1l9.2,2.7L133,173.3z M53.8,314.9c-3.2,7.1-8.6,12.7-15.3,15.8c-6.6,3-13.7,3.1-20,0.4C12.3,328.3,7.6,323,5.4,316c-2.3-7-1.8-14.8,1.4-22l0,0c3.4-7.6,9.5-13.6,16.8-16.4c3-1.2,6.1-1.7,9.1-1.7c0.9,0,1.7,0.1,2.6,0.1l21.2,28.8C56.2,308.2,55.3,311.6,53.8,314.9z M65.7,303.9l-5.6-7.6l-16.2-22l-9.1-12.4c5.7-7.7,25.5-33.6,51.9-56.9l19.1,5.5C99,229,92.5,249.9,87.4,272.8C77.7,286.1,69.8,297.7,65.7,303.9z M239.8,482.3c-9.1,21.2-18.4,34-21.5,38h-88.7c-3.1-4-12.4-16.8-21.5-38c-10.1-23.4-22-62-22.6-114.2h176.9C261.8,420.3,249.8,458.9,239.8,482.3z M260.4,273.1c-5.2-23.7-11.9-45.2-19.1-64.1l11.6-10.7c30.3,24.8,53.6,55.1,59.8,63.6l-30.8,41.9C277.8,297.7,270.1,286.3,260.4,273.1z M333.4,331.1c-6.4,2.5-13.4,2-19.9-1.4c-6.6-3.4-11.7-9.3-14.5-16.6v0c-2.1-5.4-2.7-11.1-1.8-16.5l14.3-19.5c0.3-0.2,0.7-0.3,1-0.4c2.7-1,5.5-1.5,8.3-1.5c3.4,0,6.9,0.7,10.2,2.2c7.1,3.2,13,9.4,15.9,17.2C352.7,309.6,346.6,325.9,333.4,331.1z"/>';
		if(this.glasses) {
			svg += '<path id="Bril_1_" d="M239.4,81.9h-8c-1.7-13.8-22.2-13.8-29.2-13.8c-5.7,0-20.8,0-26.8,7.8h-4.9c-6-7.8-21-7.8-26.8-7.8c-6.9,0-27.4,0-29.2,13.8H99.6v7H115c0.9,4.6,3.1,9,6.2,12.5c3.7,4.1,10.6,9.1,22.6,9.1c20.4,0,28.4-12.9,29.2-24.7c0.5,5.7,2.8,11.3,6.6,15.6c3.7,4.1,10.6,9.1,22.6,9.1c18.7,0,27-10.8,28.8-21.6h8.3V81.9z M143.8,103.5c-15.6,0-21.1-10.1-22.1-17.2v-4.3c0.7-2.8,4.4-7,22.1-7c22.3,0,22.3,6.6,22.3,8.8C166.1,102.6,147.5,103.5,143.8,103.5zM202.2,103.5c-17.6,0-22.3-12.9-22.3-19.7c0-0.3,0-0.6,0-0.9h0.4v-1.6c1.2-2.7,5.6-6.2,21.8-6.2c22.3,0,22.3,6.6,22.3,8.8C224.5,102.6,206,103.5,202.2,103.5z"/>';
		}
		svg += '</svg>';
		return svg;
	}


};

