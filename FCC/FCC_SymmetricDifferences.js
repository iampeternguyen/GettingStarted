// FCC Challenge https://www.freecodecamp.com/challenges/symmetric-difference
function sym(args) {
  var i = 0;
  var currentSymDiff = [];
  function checkSym (set1,set2){
    currentSymDiff = set1.concat(set2).filter( item => !set1.includes(item) || !set2.includes(item));
  }

  function removeDuplicates (x) {
    var seen = [];
    return x.filter(item => {return seen.hasOwnProperty(item) ? false : (seen[item] = true);
});

  }
  do {
      checkSym(removeDuplicates(currentSymDiff), removeDuplicates(arguments[i]));
      i++;
    } while (i < arguments.length);



  return currentSymDiff;
}

console.log (sym([1, 2, 3], [5, 2, 1, 4]));
