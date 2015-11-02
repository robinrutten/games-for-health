var Main = function() {
	var avatar = new Avatar('Me', 'male', '#000', '#fff', '#0AA');
	$('#avatar').html(avatar.render());
};