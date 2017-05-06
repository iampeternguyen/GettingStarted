//FCC No repeats please https://www.freecodecamp.com/challenges/no-repeats-please
"use strict";

function permAlone(str) {

//define variables
  var permArr = [];
  var chars = str.split('');

  //function to swap values
  function swap (x, y) {
    var tmp = chars[x];
    chars[x] = chars[y];
    chars[y] = tmp;
  }

  //function to make permutation array
  function makePerm (n) {
    if (n ===1) {
      permArr.push (chars.join(''));
    } else{
      for (var i = 0; i < n; i++) {
        makePerm (n-1);
        swap (n % 2 ? 0 : i, n -1);
      }
    }
  }

  makePerm(chars.length);

  // remove entries with double characters
  var regex = /(.)\1/g;
  permArr = permArr.filter(string => {return !string.match(regex);});

  return permArr.length;

}

permAlone('aba');
