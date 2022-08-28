/*1. Write a Javascript function to check whether a triangle is equilateral,
isosceles or scalene*/


function detectTriangleType(sideA,sideB,sideC) {
    if (sideA == sideB  && sideB== sideC) {
        return "Equilateral triange!!";
    }
    else if ((sideA == sideB) || (sideB == sideC) || (sideA == sideC)) {
        return "Isocles triangle!!";
    }
    else {
        return "Scalene triangle!!";
    }
}

function main () {
    let sideA = 100;
    let sideB = 100;
    let sideC = 100;
    console.log(detectTriangleType(sideA,sideB,sideC))
}

main()
