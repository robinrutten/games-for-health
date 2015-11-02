var Main = function() {
	var credit = new Credit();
	var avatar = new Avatar('Me', 'female', 'red', '#fff', '#0AA');
	$('#avatar-svg').html(avatar.render());


	window.showBubble = function(text) {
		var $idea = $('.idea');
		$('.idea-text', $idea).html(text);
		$idea.addClass('visible');
	}
};