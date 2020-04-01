const pizza = {
	name: 'pepperoni',
	toppings: ['pepperoni'],
};

function order({ name: pizzaName, toppings: pizzaTopppings }) {
	return{ pizzaName, pizzaTopppings };
}

const { pizzaName } = order(pizza);

const toppings = ['pepperoni', 'bacon', 'chilli'];

const [ first, second, third ] = toppings;

function logToppings([first, second, third]: any) {
	console.log(first, second, third);
}

logToppings(toppings);