const coupon: string = 'pizza25';

function normalizeCoupon(code: string): string {
	return code.toUpperCase();
}

const couponMesssage: string = `
	Final coupon is ${normalizeCoupon(coupon)}
`;

console.log(couponMesssage)