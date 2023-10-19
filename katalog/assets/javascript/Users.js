class Users {
	constructor(email, name, password, isAdmin) {
		this.email = email;
		this.name = name;
		this.password = password;
		this.isAdmin = isAdmin;
	}

	login() {
		localStorage.setItem('username', this.email);
		localStorage.setItem('password', this.password);
		if (!this.isAdmin) {
			localStorage.setItem('isAdmin', false);
		}
	}

	signup() {
		localStorage.setItem('email', this.email);
		localStorage.setItem('name', this.name);
		localStorage.setItem('password', this.password);
		if (!this.isAdmin) {
			localStorage.setItem('isAdmin', false);
		}
	}
}

export default Users;
