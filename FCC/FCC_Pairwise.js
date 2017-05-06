//FCC Pairwise https://www.freecodecamp.com/challenges/pairwise
function pairwise(arr, arg) {
  "use strict";
  var numbers = arr.slice();
  var sum = 0;
  for (var i = 0; i < numbers.length; i++){
    for (var j=i+1; j < numbers.length; j++){
      if (numbers[i] + numbers [j] == arg){
        sum += i + j;
        numbers[i] = numbers[j] = "used";

      }
    }
  }

  return sum;
}

console.log(pairwise([1, 3, 2, 4], 4));
