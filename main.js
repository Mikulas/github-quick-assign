console.debug("quick assign");

var assigneeForm = document.querySelector('.sidebar-assignee form');
var avatars = document.querySelectorAll('.participation .participation-avatars a');
var input = document.createElement('input');
input.type = 'hidden';
input.name = 'issue[user_assignee_ids][]';
assigneeForm.appendChild(input);

[].forEach.call(avatars, function(avatar) {
	var src = avatar.querySelector('img').src;
	var userId = /\/u\/(\d+)/.exec(src)[1];
	console.debug(avatar, userId);

	avatar.href = '#';
	avatar.addEventListener('click', function(event) {
		// remove default inputs from modal (only created if user clicked it)
		assigneeForm.querySelector('.select-menu-modal-holder').remove();
		input.value = userId;
		assigneeForm.submit();

		event.preventDefault();
		event.stopPropagation();
	}, false);
});
