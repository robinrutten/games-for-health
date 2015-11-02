var Main = function() {
	window.avatar = new Avatar('Me', 'female', 'red', '#fff', '#0AA');
	$('#avatar-svg').html(window.avatar.render());


	//showBubble('img/heart.svg')
	//showBubble('img/bestek.svg')
	window.showBubble = function(image) {
		var $idea = $('.idea');
		$('.idea-image', $idea).html($('<img/>', {'src': image}));
		//$('.idea-text', $idea).html(text);
		$idea.addClass('visible');
	}
};