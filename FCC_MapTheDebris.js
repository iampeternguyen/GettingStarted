
function orbitalPeriod(arr) {
  "use strict";

  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var orbit = [];
  function orbitalTime (obj) {
    var time = Math.round((2 * Math.PI) * Math.sqrt ( (Math.pow(earthRadius + obj.avgAlt, 3) / GM) ));
    delete obj.avgAlt;
    obj.orbitalPeriod = time;
    return obj;
  }
  for (var elem in arr){
    orbit.push(orbitalTime (arr[elem]));
  }
  return orbit;
}
// T = 2 * pi * sqrt (earth radius + average altitude)^3 / GM
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
