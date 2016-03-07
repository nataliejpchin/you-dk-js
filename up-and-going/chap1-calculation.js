// A program that calculates the total price of your phone purchase

const TAX_RATE = 0.08;
const PHONE_PRICE = 5;
const ACCESSORY_PRICE = 1;
const SPENDING_THRESHOLD = 150;

var bank_account_balance = 273;
var amount_spent = 0;
var tax;

// keep purchasing phones until you run out of money in your bank account
while ( (amount_spent + (PHONE_PRICE * (1 + TAX_RATE))) < bank_account_balance ) {

	amount_spent = amount_spent + PHONE_PRICE;
	tax = PHONE_PRICE * TAX_RATE;

	// buy accessory for each phone as long as below spending threshold
	if ( (amount_spent + (ACCESSORY_PRICE * (1 + TAX_RATE))) < SPENDING_THRESHOLD ) {

		amount_spent = amount_spent + ACCESSORY_PRICE;
		tax = tax + (ACCESSORY_PRICE * TAX_RATE);

	}

	amount_spent = amount_spent + tax;


	console.log(amount_spent);
}

/*amount_spent = amount_spent * ( 1 + TAX_RATE);

amount_spent = "Total price of phone purchase = $" + amount_spent.toFixed(2);*/