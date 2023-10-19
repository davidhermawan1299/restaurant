// password icon visible and hidden
const eyeHidden = document.getElementById('eyeHidden');
const eyeVisible = document.getElementById('eyeVisible');

const btnLogin = document.getElementById('btnLogin');
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

// configure login page

class users {
	constructor(email, name, password, username) {
		this.email = email;
		this.name = name;
		this.password = password;
		this.username = username;
	}

	login() {
		localStorage.setItem('username', username);
	}
}

let password = document.getElementById('password');
let username = document.getElementById('username');

const user = new users(null, null, null, null);
username.addEventListener('input', function () {
	user.username = this.value;
});

btnLogin.addEventListener('click', user.login());
eyeHidden.addEventListener('click', iconPasswordVisibleAndHidden);
eyeVisible.addEventListener('click', iconPasswordVisibleAndHidden);

// fetch('http://127.0.0.1:5500/katalog/assets/db/users.json')
// 	.then((response) => response.json())
// 	.then((res) => console.log(res));