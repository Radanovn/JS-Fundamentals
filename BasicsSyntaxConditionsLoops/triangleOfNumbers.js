'use strict';
function triangleFromNumbers(n) {
    var sum = "";
    for (var i = 1; i <= n; i++) {
      for (var j = 1; j <= i; j++) {
        sum += i + " "
      }
      sum += "\n";
    }
    console.log( sum)
  }
triangleFromNumbers([5])
