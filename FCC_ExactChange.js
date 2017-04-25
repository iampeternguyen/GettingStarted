//FCC Exact Change https://www.freecodecamp.com/challenges/exact-change
function checkCashRegister(price, cash, cid) {
  var change = cash-price;
  // Here is your change, ma'am.
  var currency = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];
// function to get register total
function totalCID (x){
   var sum = 0;
   for (i = 0; i <x.length;i++){
     sum += x[i][1];
   }
   return Math.round(sum * 100)/100;
}
var registerTotal = totalCID (cid);
var register = cid.reduce(function(acc,curr) {
  acc[curr[0]] = curr[1];
  return acc;
}, {}); // make register object instead of array {} is important!

  if (registerTotal==change) {
    return 'Closed';
  }
  if (registerTotal < change){
    return 'Insufficient Funds';
  }
// create array for output
  var changeArray = currency.reduce(function (acc, curr) {
      var howMuch = 0;
      while (register[curr.name] > 0 && change>= curr.val) {
        change -= curr.val;
        register[curr.name] -= curr.val;
        howMuch += curr.val;

        change = Math.round(change * 100)/100;
      }
      if (howMuch > 0) {
        acc.push([curr.name, howMuch]);
      }
      return acc;
    }, []);

    if (change > 0) {
      return "Insufficient Funds";
    }

return changeArray;

}
// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
