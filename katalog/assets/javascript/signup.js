import Users from './Users.js';
const input = document.querySelectorAll('input');
const btnSignup = document.getElementById('btnSignup');
function iconPasswordVisibleAndHidden() {
	if (password.getAttribute('type') === 'password') {
		password.setAttribute('type', 'text');
		eyeHidden.classList.add('hidden');
		eyeVisible.classList.remove('hidden');
	} else {
		password.setAttribute('type', 'password');
		eyeVisible.classList.add('hidden');
		eyeHidden.classList.remove('hidden');
	}
}

eyeHidden.addEventListener('click', iconPasswordVisibleAndHidden);
eyeVisible.addEventListener('click', iconPasswordVisibleAndHidden);

btnSignup.addEventListener('click', function () {
	const inputValue = {};
	input.forEach((item) => {
		inputValue[item.id] = item.value;
	});
	console.log(inputValue);
	const user = new Users(
		inputValue.email,
		inputValue.name,
		inputValue.password
	);
	user.signup();
	window.location.href = './homepage.html';
});
