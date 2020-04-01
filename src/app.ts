type Pizza = { name: string, toppings: number };

const pizza: Pizza = {name: 'Blazing inferno', toppings: 5 };

const serialized = JSON.stringify(pizza);

function getNameFromJSON(obj: string) {
	return(JSON.parse(obj) as Pizza).name;
}

getNameFromJSON(serialized)