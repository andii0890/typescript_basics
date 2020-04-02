interface SizesInterface {
	availableSizes: string[];
}

abstract class Sizes implements SizesInterface {
	constructor(protected sizes: string[]) {}

	set availableSizes(sizes: string[]) {
		this.sizes = sizes;
	}
	get availableSizes() {
		return this.sizes;
	}
}

interface PizzaInterface extends SizesInterface {
	readonly name: string;
	toppings: string[];
	updateSizes(sizes: string[]): void;
	addTopping(toppping: string):void;
}

class Pizza extends Sizes implements PizzaInterface {
	public toppings: string[] = [];

	constructor(readonly name: string,  sizes: string[]){
		super(sizes);
	}

	public addTopping(topping: string){
		this.toppings.push(topping);
	}

	public updateSizes(sizes: string[]) {
		this.sizes = sizes;
	}
}


const pizza = new Pizza('pepperoni', ['small', 'medium']);

console.log(pizza.availableSizes)

pizza.updateSizes(['large']);

console.log(pizza.availableSizes)


