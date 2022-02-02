// function factorials(numbers) {
//    let initVal = 1;
//    for (let i = 1; i <= numbers; i++) {
//       initVal *= i;  
//    }
//    return initVal;
// }

// console.log(factorials(7));


// function recurs (num) {
//    if (num <= 0) {
//       return 1;
//    } else {
//       return num * recurs(num - 1);
//    }
// }

// console.log(recurs(4));


// // converter celsius to farenheit
// theory (0°C × 9/5) + 32 = 32°F
// function celcTofaren(celc) {
//    return (celc * 1.8) + 32;
// }

// console.log(celcTofaren(180) + " Degree Farenheit");

// // convert Farenheit to celsius

// function farenheitToCelsius(farenheit) {
//    return (farenheit - 32) / 1.8;
// }

// console.log(farenheitToCelsius(356) + " Degree Celsius");


// // Grade Calculation
// function gradeCalculation(marks) {
//    let mark = parseInt(marks);
//    let grade;
//    if (mark >= 80) {
//       grade = "Your grade is : A+";
//    } else if (mark >= 70 && mark <= 79) {
//       grade = "Your grade is : A";
//    } else if (mark >= 60 && mark <= 69) {
//       grade = "Your grade is : A-";
//    } else if (mark >= 50 && mark <= 59) {
//       grade = "Your grade is : B";
//    } else if (mark >= 40 && mark <= 49) {
//       grade = "Your grade is : C";
//    } else if (mark >= 33 && mark <= 39) {
//       grade = "Your grade is : D";
//    } else {
//       grade = "You Failed";
//    }
//    return grade;
// }

// console.log(gradeCalculation(32));

// Finding largest value from array with js Math max function;
// let arr = [5, 20, 10];
// console.log(Math.max(...arr));


// // Array reduce function
// const reduceArr = [175, 50, 25, 40];
// let reduceFunc = reduceArr.reduce((total, number, index) => {
//    return (total - number) + index;
// });

// console.log(reduceFunc);

// Array constructor
// const myArr = [20, 30, 40];

// let newArr = myArr.constructor;
// console.log(newArr);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(1, 2, 1);
// console.log(fruits);


// // Finding Small element from array
// function findLowerElem(arr) {
//    let number = arr[0];

//    for (let i = 0; i < arr.length; i++) {
//       const elem = arr[i];

//       if (elem < number) {
//          number = elem;
//       }
//    }
//    return number;
// }
// console.log(findLowerElem([2, 10, 30, 29, 79, 5, 50]));

// // finding largest element form array;
// const myValue = [100, 300, 900, 39, 500, 600, 700];

// function largeElement(arr) {
//    let largest = arr[0];
//    let newArr;
//    for (let i = 0; i < arr.length; i++) {
//       newArr = arr[i];

//       if (newArr > largest) {
//          largest = newArr;
//       }
//    }
//    return largest;
// }
// console.log(largeElement(myValue));

// // fibonacci series
// let fibo = [0, 1];

// for (let i = 2; i <= 10; i++) {
//    fibo[i] = fibo[i - 1] + fibo[i - 2];
// }

// console.log(fibo);

// console.log(Math.round(Math.random()*10));


// console.log(Math.floor(13.67));

// const numberr = 12.96;

// console.log(Math.round(numberr));



// // finding even numbers from array 
// function findEvenNumber(arr) {
//    let evenNumber = [];

//    for (let i = 0; i < arr.length; i++) {
//       let element = arr[i];
//       if (element % 2 === 0) {
//          evenNumber.push(element);
//       }
//    }
//    return evenNumber;
// }

// const evenArray = [5, 10, 45, 30, 28, 47, 89, 33];
// console.log(findEvenNumber(evenArray));


// // finding duplicate element from array
// const dupArray = ["apple", "banana", "mango", "apple", "mango"];

// function findDuplicate(arr) {
//    let unique = [];
//    for (const element of arr) {
//       if (unique.indexOf(element) == -1) {
//          unique.push(element);
//       }
//    }
//    return unique;
// }

// console.log(findDuplicate(dupArray));

// function sevenBoom(arr) {
//    const regex = /7/;
//    return regex.test(arr) ? "Boom!" : "there is no 7 in the array";
// }
// console.log(sevenBoom([1, 2, 3, 4, 56, 6]));


// const arr = [4, 6, 678, 45, 2, 1];
// const lastElem = arr[arr.length - 1] = 7;

// console.log(lastElem);
// console.log(arr);

// // finding largest value and smallest value in array
// const numbers = [5, 0, 10, 200, 100];

// function minMax(arr) {
//    let largeVal = arr[0];
//    let smallVal = arr[0];
//    let emptyArr = [];
//    for (let i = 0; i < arr.length; i++) {
//       const elem = arr[i];

//       if (elem > largeVal) {
//          largeVal = elem;
//       } 
//       if (elem < smallVal) {
//          smallVal = elem;
//       }
//    }
//    emptyArr.push(largeVal, smallVal);
//    return emptyArr;
// }

// console.log(minMax(numbers));



// /* 
// task : check if one array can be nested in another.
// step : create a function that return true if the first array can be nested inside the second.
// 1. arr1's min is greater than arr2's min.
// 2. arr1's max is smaller than arr2's max.
// */

// function canNest(arr1, arr2) {
//    let arr1Min = Math.min(...arr1);
//    let arr1Max = Math.max(...arr1);
//    let arr2Min = Math.min(...arr2);
//    let arr2Max = Math.max(...arr2);
//    if (arr1Min > arr2Min && arr1Max < arr2Max) {
//       return true;
//    } else {
//       return false
//    }
// }

// const nArr1 = [1, 2, 3, 4];
// const nArr2 = [0, 6];

// console.log(canNest([3, 1], [4, 0]));


// /*
// task : tuck in array
// note : Create a function that takes two array and insert the second array in the middle of the first array.
// */

// function tuckArray(arr1, arr2) {
//    let a = [arr1.shift()];
//    let b = [arr1.pop()];

//    for (let i = 0; i < arr2.length; i++) {
//       arr1.push(arr2[i]);
//    }
//    arr1.push(b[0]);
//    for (let i = 0; i < arr1.length; i++) {
//       a.push(arr1[i]);
//    }
//    return a;
// }
// console.log(tuckArray([15, 150], [45, 75, 35]));


/*
task : Find the Smallest & second smallest.
*/
const myArray = [5, 4, 7, 5, 3, 2, 10];

function smallAndSecond(arr) {
   let firstInfinity = arr[0];
   let secondInfinity = arr[0];
   let emptyArr = [];

   for (let i = 0; i < arr.length; i++) {
      const elem = arr[i];

      if (elem < firstInfinity) {
         secondInfinity = firstInfinity;
         firstInfinity = elem;
      } else if (elem < secondInfinity) {
         secondInfinity = elem;
      }
   }
   emptyArr.push(firstInfinity, secondInfinity);
   return emptyArr;
}

console.log(smallAndSecond(myArray));