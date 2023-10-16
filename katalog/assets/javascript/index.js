fetch('http://127.0.0.1:5500/katalog/assets/db/menu.json')
	.then((response) => response.json())
	.then((res) => console.log(res));
