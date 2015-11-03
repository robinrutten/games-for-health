$(document).ready(function() {

	$("#status").hide();
	var colorsToPick = ["hairColor", "bodyColor", "pantsColor"];
	var picking = "bodyColor";
	var picker = new color.picker.Model(0,0,0);

	picker.addWatch(document.getElementById('red'), 'red');
	picker.addWatch(document.getElementById('green'), 'green');
	picker.addWatch(document.getElementById('blue'), 'blue');
	
	picker.on('colorPicked', function(color){
		window.avatar[picking] = color;
		$('#avatar-svg').html(window.avatar.render());

		var gradientRange = picker.getColorRangeFor('red');
		document.getElementById('red').style.backgroundImage = '-moz-linear-gradient(left, ' + gradientRange.low + ', ' + gradientRange.high + ')';
		gradientRange = picker.getColorRangeFor('green');
		document.getElementById('green').style.backgroundImage = '-moz-linear-gradient(left, ' + gradientRange.low + ', ' + gradientRange.high + ')';
		gradientRange = picker.getColorRangeFor('blue');
		document.getElementById('blue').style.backgroundImage = '-moz-linear-gradient(left, ' + gradientRange.low + ', ' + gradientRange.high + ')';
	});

	$("#gender").on("click", function(el) {
		window.avatar.toggleGender();
		$('#avatar-svg').html(window.avatar.render());
	});

	$("#glasses").on("click", function(el) {
		window.avatar.glasses = !window.avatar.glasses;
		$('#avatar-svg').html(window.avatar.render());
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
	});

	$(".avatar").on("click", function(el) {
		$(el.currentTarget).addClass("bungeejumping");
	});

	$(".avatar").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e){ $(e.currentTarget).removeClass("bungeejumping") });
	$(".dialog").hide();


});

