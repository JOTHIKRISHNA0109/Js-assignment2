/*3. Write a JavaScript program to find the sum of the multiples of 3 and 5
under 1000*/

function getMultiples() {
    var multiplesArray = [];
    for (let i=15;i<1000;i+=15) {
        multiplesArray.push(i);
    }
    return multiplesArray;
}

function main() {
    console.log(getMultiples());
}

main()
