var Main = function() {
	var avatar = window.avatar = new Avatar('Me', 'female', '#710200', '#990000', '#003399');
	avatar.statusBar = $("#status");
	$('#avatar-svg').html(window.avatar.render());

	var game = window.game = new Game();
	game.addAvatar(avatar);

	var animator = new Animator(avatar);


	$('body').on('click', '.js-settings-toggle', function(e) {
		$('#settings').toggleClass('visible');
	});

	$('body').on('click', '.js-action', function(e) {
		var $action = $(this), 
			type = $action.attr('data-type');
		
		if(type == 'hearts') {
			window.game.increaseHearts(window.avatar);
			$(".dialog").show();
			console.log("a");
			window.avatar.render();
		}
		if(type == 'food') {
			window.game.increaseFood(window.avatar);
			window.avatar.render();
		}
		if(type == 'happy') {
			window.game.increaseHappy(window.avatar);
			window.avatar.render();
		}
	});

	//showBubble('img/heart.svg');
	//showBubble('img/bestek.svg');
	window.showBubble = function(image) {
		var $idea = $('.idea');
		$('.idea-image', $idea).html($('<img/>', {'src': image}));
		//$('.idea-text', $idea).html(text);
		$idea.addClass('visible');
	}
};