const numbers = [10,11,12,13,14]
const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// numbers.map(function(element){
//     return element * element;


// })

// console.log(result);

// const result = numbers.map(x => x  * x);
// console.log(result);

const bigger = numbers.filter(x  =>  x  < 10);
const isThere = numbers.find(x => x > 5 );
console.log(isThere);