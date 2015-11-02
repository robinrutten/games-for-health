var Main = function() {
	window.avatar = new Avatar('Me', 'male', '#000', '#fff', '#0AA');
	$('#avatar').html(avatar.render());
};