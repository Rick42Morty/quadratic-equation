module.exports = function solveEquation(equation) {
  // your implementation
  var j = 0, a = "", b = "", c = "", D;

  while (equation[j] !== '*') {
    if (equation[j] === " "){
      j++;
      continue;
    }
    a += equation[j];
    j++;
  }

  j += 5;

  while (equation[j] !== '*') {
    if (equation[j] === " "){
      j++;
      continue;
    }
    b += equation[j];
    j++;
  }

  j += 3;

  while (j < equation.length) {
    if (equation[j] === " "){
      j++;
      continue;
    }
    c += equation[j];
    j++;
  }

  a = +a;
  b = +b;
  c = +c;

  D = b*b - 4*a*c;
  
  var x = [];
  x[0] = Math.round((-b + Math.sqrt(D))/(2*a));
  x[1] = Math.round((-b - Math.sqrt(D))/(2*a));

  x.sort( (a, b) => a - b );

  return x;

}
