class Pizza {
	public toppings: string[] = []

	constructor(readonly name: string){}

	public addTopping(topping: string){
		this.toppings.push(topping);
	}
}

const pizza = new Pizza('pepperoni');

pizza.addTopping('pepperoni');

pizza.name = 'ABC' //throw an error, we can not modify it
