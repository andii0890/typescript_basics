class Coupon {
	static allowed = ['Pepperoni', 'Blazing inferno'];
	static create(percentage: number) {
		return `PIZZA_RESTAURANT_${percentage}`;
	}
}

console.log(Coupon.create(25));