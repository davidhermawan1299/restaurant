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

    // card launch hide
    cardLaunch.style.display = 'none';
});

function apiMenu(menuName, definisiName, cardName) {
    fetch('http://127.0.0.1:5500/katalog/assets/db/menu.json')
    .then(response => response.json())
    .then((res) => {
        res.Menu[0][menuName].forEach(definisiName => {
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
            containerTextPrices.appendChild(prices)
    
            cardName.appendChild(containerTextPrices);
        });
    })
    .catch(err => console.log(err));
}

apiMenu('breakfast', breakfast, cardBreakfast);
apiMenu('launch', launch, cardLaunch);