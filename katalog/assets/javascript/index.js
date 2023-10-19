import Users from './Users.js';
// password icon visible and hidden
const eyeHidden = document.querySelector('#eyeHidden');
const eyeVisible = document.querySelector('#eyeVisible');
const input = document.querySelectorAll('input');
const btnLogin = document.querySelector('#btnLogin');

// configure login page
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

let data = await fetch('http://127.0.0.1:5500/katalog/assets/db/users.json')
	.then((response) => response.json())
	.then((res) => {
		for (const data of res.users) {
			return data;
		}
	})
	.catch((error) => {
		console.log(error);
	});

console.log(data.email);

btnLogin.addEventListener('click', async function () {
	const inputValue = {};
	input.forEach((item) => {
		inputValue[item.id] = item.value;
	});
	await data;

	console.log(inputValue.email == data.email);

	if (
		inputValue.email === data.email &&
		inputValue.password === data.password
	) {
		const user = new Users(data.email, null, data.password, data.isAdmin);
		user.login();
		window.location.href = './dashboard.html';
	} else {
		const user = new Users(inputValue.email, null, inputValue.password, null);
		user.login();
		window.location.href = './homepage.html';
	}
});

eyeHidden.addEventListener('click', iconPasswordVisibleAndHidden);
eyeVisible.addEventListener('click', iconPasswordVisibleAndHidden);
