const pizzas = [{ name: 'Pepperonni', toppings: ['pepperoni']}];

const mappedPizzas= pizzas.map(pizza => pizza.name.toUpperCase());

console.log(mappedPizzas);

function createPizza() {

}

const pizza = {
	name: 'Blazing Inferno',
	getName: function () {
		console.log(this.name);
	},
};

console.log(pizza.getName());
