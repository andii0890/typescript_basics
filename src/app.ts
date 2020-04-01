let selectedTopping: string = 'pepperoni'

function selectTopping(topping: string) {
	selectedTopping = topping;
}

selectTopping('bacon');

console.log(selectedTopping);

