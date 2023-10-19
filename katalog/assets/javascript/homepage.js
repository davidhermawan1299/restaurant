// burger button
const burgerButton = document.querySelector('.burgerButton');
const navListMobile = document.querySelector('.navListMobile');
const body = document.querySelector('body');
burgerButton.addEventListener('click', () => {
	body.style.overflow = 'hidden';
	burgerButton.classList.add('rotate-45');

	navListMobile.style.display = 'flex';
	setTimeout(() => {
		navListMobile.style.opacity = '1';
	}, 200);
	setTimeout(() => {
		buttonCloseListMobile.style.display = 'flex';
	}, 400);
});

const buttonCloseListMobile = document.querySelector('.buttonCloseListMobile');
buttonCloseListMobile.addEventListener('click', () => {
	body.style.overflow = 'auto';
	burgerButton.classList.remove('rotate-45');

	navListMobile.style.opacity = '0';
	setTimeout(() => {
		navListMobile.style.display = 'none';
		burgerButton.style.display = 'flex';
		buttonCloseListMobile.style.display = 'none';
	}, 200);
});

const breakfast = document.querySelector('.breakfast');
const launch = document.querySelector('.launch');
const coffee = document.querySelector('.coffee');

const cardBreakfast = document.querySelector('.cardBreakfast');
const cardLaunch = document.querySelector('.cardLaunch');
const cardCoffee = document.querySelector('.cardCoffee');

// breakfast
breakfast.addEventListener('click', () => {
	// breakfast border
	breakfast.classList.add('border-b-2');
	breakfast.classList.add('border-outerSpace');

	// launch hide
	launch.classList.remove('border-b-2');
	launch.classList.remove('border-outerSpace');

	// coffee hide
	coffee.classList.remove('border-b-2');
	coffee.classList.remove('border-outerSpace');

	// card Breakfast show
	cardBreakfast.style.display = 'grid';

	// card launch hide
	cardLaunch.style.display = 'none';

	// card cardCoffee hide
	cardCoffee.style.display = 'none';
});

// launch
launch.addEventListener('click', () => {
	// launch border
	launch.classList.add('border-b-2');
	launch.classList.add('border-outerSpace');

	// breakfast hide
	breakfast.classList.remove('border-b-2');
	breakfast.classList.remove('border-outerSpace');

	// coffee hide
	coffee.classList.remove('border-b-2');
	coffee.classList.remove('border-outerSpace');

	// card launch show
	cardLaunch.style.display = 'grid';

	// card Breakfast hide
	cardBreakfast.style.display = 'none';

	// card cardCoffee hide
	cardCoffee.style.display = 'none';
});

// coffee
coffee.addEventListener('click', () => {
	// launch border
	coffee.classList.add('border-b-2');
	coffee.classList.add('border-outerSpace');

	// breakfast hide
	breakfast.classList.remove('border-b-2');
	breakfast.classList.remove('border-outerSpace');

	// launch border
	launch.classList.remove('border-b-2');
	launch.classList.remove('border-outerSpace');

	// card coffee show
	cardCoffee.style.display = 'grid';

	// card Breakfast hide
	cardBreakfast.style.display = 'none';

	// card launch hide
	cardLaunch.style.display = 'none';
});

// menu breakfast & launch
function apiMenu(menuName, definisiName, cardName) {
	fetch('http://127.0.0.1:5500/katalog/assets/db/menu.json')
		.then((response) => response.json())
		.then((res) => {
			res.Menu[0][menuName].forEach((definisiName) => {
				const containerTextPrices = document.createElement('div');
				containerTextPrices.classList.add('containerTextPrice');

				const widthCards = document.createElement('div');
				widthCards.classList.add('widthCard');

				const launchFoods = document.createElement('h3');
				launchFoods.classList.add('launchFood');
				launchFoods.textContent = definisiName.food;

				const launchToppings = document.createElement('p');
				launchToppings.textContent = definisiName.topping;
				launchToppings.classList.add('launchTopping');

				const launchOthers = document.createElement('p');
				launchOthers.classList.add('launchOther');
				launchOthers.textContent = definisiName.other;

				widthCards.appendChild(launchFoods);
				widthCards.appendChild(launchToppings);
				widthCards.appendChild(launchOthers);

				const prices = document.createElement('p');
				prices.classList.add('price');
				prices.textContent = `$${definisiName.price}`;

				containerTextPrices.appendChild(widthCards);
				containerTextPrices.appendChild(prices);

				cardName.appendChild(containerTextPrices);
			});
		})
		.catch((err) => console.log(err));
}

apiMenu('breakfast', breakfast, cardBreakfast);
apiMenu('launch', launch, cardLaunch);

// menu coffee
fetch('http://127.0.0.1:5500/katalog/assets/db/menu.json')
	.then((response) => response.json())
	.then((res) => {
		res.Menu[0].coffee.forEach((coffee) => {
			const launchFoods = document.createElement('h3');
			launchFoods.classList.add('launchFood');
			launchFoods.textContent = coffee.drink;

			const launchToppings = document.createElement('p');
			launchToppings.classList.add('launchTopping');
			launchToppings.textContent = coffee.topping;

			const container = document.createElement('div');
			container.appendChild(launchFoods);
			container.appendChild(launchToppings);

			containerTextPrices = document.createElement('div');
			containerTextPrices.classList.add('containerTextPrice');
			containerTextPrices.appendChild(container);

			cardCoffee.append(containerTextPrices);
		});
	});

// Reservation
const peopleSelect = document.querySelector('#peopleSelect');
for (let i = 2; i < 6; i++) {
	const createElmOption = document.createElement('option');
	createElmOption.setAttribute('value', i);
	const createElemText = document.createTextNode(`${i} Option`);
	createElmOption.appendChild(createElemText);

	createElmOption.classList.add('font-medium', 'text-base');

	peopleSelect.appendChild(createElmOption);
}

const timerSelect = document.querySelector('#timerSelect');
for (let i = 1; i <= 10; i++) {
	const hour = i < 10 ? '0' + i : i;
	for (let j = 0; j <= 59; j++) {
		const minute = j < 10 ? '0' + j : j;
		const time = `${hour}:${minute} PM`;

		const createElmOptionTimer = document.createElement('option');
		createElmOptionTimer.setAttribute('value', time);

		const createElmText = document.createTextNode(time);
		createElmOptionTimer.appendChild(createElmText);

		createElmOptionTimer.classList.add('font-medium', 'text-base');

		timerSelect.appendChild(createElmOptionTimer);
	}
}

function reservation() {
	const dateInput = document.querySelector('#dateInput');
	localStorage.setItem('People', peopleSelect.value);
	localStorage.setItem('date', dateInput.value);
	localStorage.setItem('time', timerSelect.value);
}
