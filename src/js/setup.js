
	


$(document).ready(function() {

	var colorsToPick = ["hairColor", "bodyColor", "pantsColor"];
	var picking = "";
	var picker = new color.picker.Model(0,0,0);

	picker.addWatch(document.getElementById('red'), 'red');
	picker.addWatch(document.getElementById('green'), 'green');
	picker.addWatch(document.getElementById('blue'), 'blue');
	
	picker.on('colorPicked', function(color){
		document.getElementById('color').style.backgroundColor = color;
		var gradientRange = picker.getColorRangeFor('red');
		document.getElementById('red').style.backgroundImage = '-moz-linear-gradient(left, ' + gradientRange.low + ', ' + gradientRange.high + ')';
		gradientRange = picker.getColorRangeFor('green');
		document.getElementById('green').style.backgroundImage = '-moz-linear-gradient(left, ' + gradientRange.low + ', ' + gradientRange.high + ')';
		gradientRange = picker.getColorRangeFor('blue');
		document.getElementById('blue').style.backgroundImage = '-moz-linear-gradient(left, ' + gradientRange.low + ', ' + gradientRange.high + ')';
	});

	$("body").on("click", "svg path", function(el) {

		switch(el.target.id) {

			case "Broek" :
				picking = "pantsColor";
				break;
			case "Haar" :
				picking = "hairColor";
				break;
			case "Shirt" :
				picking = "bodyColor";
				break;

		}
		console.log(picking);


	});


	$("#avatar").on("click", function(el) {

		//console.log(el);

	});
});

