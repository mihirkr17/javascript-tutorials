// function factorials(numbers) {
//    let initVal = 1;
//    for (let i = 1; i <= numbers; i++) {
//       initVal *= i;  
//    }
//    return initVal;
// }

// console.log(factorials(7));


function recurs (num) {
   if (num <= 0) {
      return 1;
   } else {
      return num * recurs(num - 1);
   }
}

console.log(recurs(4));