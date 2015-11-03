var Main = function() {
	//showBubble('img/heart.svg');
	//showBubble('img/bestek.svg');
	window.showBubble = function(image) {
		var $idea = $('.idea');
		$('.idea-image', $idea).html($('<img/>', {'src': image}));
		//$('.idea-text', $idea).html(text);
		$idea.addClass('visible');

		setTimeout(function() {
			$idea.removeClass('visible');
		}, 5000);
	}
	window.hideBubble = function(image) {
		var $idea = $('.idea');
		$idea.removeClass('visible');
	};

	var avatar = window.avatar = new Avatar('Me', 'female', '#710200', '#990000', '#003399');
	avatar.statusBar = $("#status");
	$('#avatar-svg').html(window.avatar.render());

	var game = window.game = new Game();
	game.addAvatar(avatar);

	window.noActionTimeout;

	var noActionFunction = function() {
		window.showBubble('img/sleep.svg');
	}

	var restartTimeout = function() {
		console.log('restart timeout');
		window.hideBubble();
		if(window.noActionTimeout) {
			clearTimeout(window.noActionTimeout);
		}
		window.noActionTimeout = setTimeout(function() {
			noActionFunction();
		}, 15000);
	};

	restartTimeout();

	/**
	 * change of action points
	 */
	$('body').on('actionPointsChange', function(e, points, type) { 
		$('#points-container').removeClass('positive negative');
		if(type == 'positive') {
			$('#points-container').addClass('positive');
		} else {
			$('#points-container').addClass('negative');
		}
		if(points >= 10) {
			$('#actions').addClass('visible');
		} else {
			$('#actions').removeClass('visible');
		}
	});

	/**
	 * init points
	 */
	window.actionPoints = new ActionPoints($('#points'));
	setInterval(function() {
		window.actionPoints.increase(1);
	}, window.actionPoints.increaseInterval);
	var animator = new Animator(avatar);


	$('body').on('click', '.js-settings-toggle', function(e) {
		$('#settings').toggleClass('visible');
	});
	var currentQ = 1;
	$('body').on('click', '.js-action', function(e) {
		var $action = $(this), 
			type = $action.attr('data-type');

		restartTimeout();
		
		if(type == 'hearts') {
			$(".dialog .dialog-title").html($("#vraag"+ currentQ + "Header").html());
			$(".dialog .dialog-body").html($("#vraag" + currentQ).html());
			$(".dialog").show();
			
			$(".dialog li").on("click", function(el) {
				window.avatar.rockeach.score($(this).attr('data-rokeach'));
				
				eval($(this).attr('data-func'));
					
				$(".dialog dialog-title").html("");
				$(".dialog dialog-body").html("");
				$(".dialog").hide();
				
				showBubble('img/heart.svg');
			
			});

			currentQ +=1;
			if(currentQ == 4) {
				currentQ = 1;
			}
			showBubble('img/heart.svg');
			window.game.increaseHearts(window.avatar);
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
		try {
			window.actionPoints.decrease(10);
		} catch(ex) {

		}
	});
};