// YDKJS Calculate Total Price
var bankAccount = 500;
var spendingThreshold = 300;
var currentTotal = 0;
var howManyPhones = 0;
var howManyAccessories = 0;
const TAX_RATE = 1.07;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;


function buyPhones (){
  if (currentTotal + PHONE_PRICE * TAX_RATE < spendingThreshold) {
    currentTotal += (PHONE_PRICE * TAX_RATE);
    howManyPhones++;
    if ((currentTotal + (ACCESSORY_PRICE * TAX_RATE)) < spendingThreshold) {
      currentTotal += ACCESSORY_PRICE * TAX_RATE
      howManyAccessories++;
    }

  }
  else {}

}


function printReceipt () {
  currentTotal = currentTotal.toFixed(2);
    console.log("Phones *  " + howManyPhones + " = $" + howManyPhones * PHONE_PRICE);
    console.log("Accessories * " + howManyAccessories + " = $" + howManyAccessories * ACCESSORY_PRICE);
    console.log("Tax " + TAX_RATE);
    console.log("Total = $" + currentTotal);
}

do {buyPhones()} while (currentTotal + PHONE_PRICE * TAX_RATE < spendingThreshold);



printReceipt();
