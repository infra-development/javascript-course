'use strict';

function calcAge(birthyear) {
  const age = 2037 - birthyear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var milenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Haresh';

      // Reasssigning outer scope's variable
      output = 'Output';

      const str = `Oh, and you're a milenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(milenial);
    // console.log(add(3, 2));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'kaushik';
calcAge(1991);
