class Sizes {
	constructor(public sizes: string[]) {}

	//read
	set availableSizes(sizes: string[]) {
		this.sizes = sizes;
	}
	//write	
	get availableSizes() {
		return this.sizes;
	}
}

const sizes = new Sizes(['small', 'medium']);

//invoke getter 
console.log(sizes.availableSizes)
//invoke setter

sizes.availableSizes = ['medium','large']
console.log(sizes.availableSizes);


class Pizza extends Sizes {
	public toppings: string[] = []

	constructor(readonly name: string, public sizes: string[]){
		super(sizes);
	}

	public addTopping(topping: string){
		this.toppings.push(topping);
	}
}

const pizza = new Pizza('pepperoni', ['small', 'medium']);
console.log(pizza.availableSizes)

pizza.addTopping('pepperoni');

