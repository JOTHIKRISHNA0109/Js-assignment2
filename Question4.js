/*4. Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100).*/


function isPrimeNumber(currentNumber) {
    let counter = 0;
    for (let primeChecker=2;primeChecker<=currentNumber/2;primeChecker++) {
        if (currentNumber%primeChecker == 0) {
            counter += 1;
            break;
        }
    }
    if (counter == 0) {
        return true;
    }
    return false;
}

function factorial(number) {
  let factorial = 1;
  for (let i=1;i<=number;i++) {
      factorial*=i;
  }
  return factorial
}

function main() {
    let lowerRange = 1;
    let upperRange = 10;
    let currentNumber = lowerRange;
    let counter = 0;
    for(;currentNumber<upperRange;currentNumber++) {
        if (isPrimeNumber(currentNumber)) {
            console.log(factorial(currentNumber));
        }
    }
}

main()
