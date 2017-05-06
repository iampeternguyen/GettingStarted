//FCC Inventory Update https://www.freecodecamp.com/challenges/inventory-update
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    function getIndex (item, array) {
      for (var i = 0; i < array.length; i++){
        if (item==array[i][1]){
          return i;
        }
      }
      return undefined;
    }

// update the list
    for (var i=0; i < arr2.length; i++){
      var x = getIndex(arr2[i][1], arr1);
      if (x === undefined) {
        arr1.push(arr2[i]);
      }
      if (x !== undefined) {
        arr1[x][0] += arr2[i][0];
      }
    }

// sort the list
arr1.sort(function(a, b) {
    var valueA = a[1];
    var valueB = b[1];
    if (valueA < valueB) {
        return -1;
    }
    else if (valueA > valueB) {
        return 1;
    }
    return 0;
});


    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
