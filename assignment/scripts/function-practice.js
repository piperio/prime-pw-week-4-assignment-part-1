console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, Joe!';
}
console.log('Hello, Joe!', helloName());

// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return 3 + 5;
}
  // return firstNumber + secondNumber;

console.log(addNumbers());


// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber ){
  return 3 * 9 * 6;
}

console.log(multiplyThree());


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0 )
    return true;
  else (number < 0 )
    return false;
}

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome

console.log( 'isPositive - should say true', isPositive(4) );
console.log( 'isPositive - should say false', isPositive(-3.25) );
console.log( 'isPositive - should say false', isPositive(-1) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array) {
  if(getLast.length < 1 || array === undefined) {
    return undefined;
  } else {
    return array[array.length - 1];
  }
}

console.log(getLast());
console.log(getLast([]));
console.log(getLast([1]));
console.log(getLast([1, 2]));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

function find(value, array){
  for (var i = 0; i < array.length; i++) {
    if (array[i].name === value){
      return true;
    } else
    return false;
  }
}

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
  if (letter[0] === string[0]){
    return true;
  } else {
    return false;
  }
  }

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(input) {
  if (toString.call(input) !=="[object Array]")
  return false;
    var sum = 0;
    for (var i = 0; i < input.length; i++) {
      sum += Number(input[i]);
    }
    return sum;
  }
  console.log(sumAll([3, 4, 5]));
  console.log(sumAll([100, 200, 300]));
  console.log(sumAll([10, 7, 3]));


  // TODO: loop to add items

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.





// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
