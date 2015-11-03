var Main = function() {
	var avatar = window.avatar = new Avatar('Me', 'female', 'red', '#fff', '#0AA');
	$('#avatar-svg').html(window.avatar.render());

	var game = window.game = new Game();
	game.addAvatar(avatar);

	var animator = new Animator(avatar);


	$('body').on('click', '.js-settings-toggle', function(e) {
		$('#settings').toggleClass('visible');
	});

	//showBubble('img/heart.svg')
	//showBubble('img/bestek.svg')
	window.showBubble = function(image) {
		var $idea = $('.idea');
		$('.idea-image', $idea).html($('<img/>', {'src': image}));
		//$('.idea-text', $idea).html(text);
		$idea.addClass('visible');
	}
};