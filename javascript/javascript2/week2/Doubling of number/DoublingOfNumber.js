
          //Doubling of number

// 1- solution in this way with normal function way 
/*   
 let numbers = [1, 2, 3, 4, 5, 6, 7, 8 ];
let newNumbers = [];

// create new array with just odd numbers
function oddFunction(number){    // 1- create a function to find the odd number
    if (number % 2 !== 0) return true
}
const oddNumbers = numbers.filter(oddFunction)  // 2- to make new array with just new numbers
console.log(oddNumbers);

// create new array with just double odd numbers
function dbOddNumbers(item) {   
    return item * 2
}
const dbOddNumber = oddNumbers.map(dbOddNumbers)
console.log(dbOddNumber);
 
 */
/* 
// 2- this way with using filter then map way
let numbers = [1, 2, 3, 4, 5, 6, 7, 8 ];
let newNumbers = [];

// create new array with just odd numbers
const oddNumbers = numbers.filter ((number) => {    
    if (number % 2 !== 0) return true
})  

// create new array with just double odd numbers
const dbOddNumbers = item => item * 2

const dbOddNumber = oddNumbers.map(dbOddNumbers)
console.log(dbOddNumber);
  */

// 3- this solution by Chaining  
let numbers = [1, 2, 3, 4, 5, 6, 7, 8 ];
let newNumbers = [];

// create new array with just odd numbers then doubling it 
const oddNumbers = numbers.filter ((number) => (number % 2 !== 0)).map( item => item * 2) 
console.log(oddNumbers);
 


//  I tried this 3 ways just as training...  