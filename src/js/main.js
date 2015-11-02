var Main = function() {
	window.avatar = new Avatar('Me', 'female', 'red', '#fff', '#0AA');
	$('#avatar-svg').html(window.avatar.render());


	window.showBubble = function(text) {
		var $idea = $('.idea');
		$('.idea-text', $idea).html(text);
		$idea.addClass('visible');
	}
};