
  // Difference between median and average 

// create a function that takes an array as parameter and returns the average of that parameter

const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

function average (housePrices){                         // create a function 

    let total=0;   
    for (let i = 0; i < housePrices.length; i++) {   // sum all the number in array
           total = total + housePrices[i];        
       }
       console.log(total);
       //return (total)
   
   const average =Math.round(total/housePrices.length) ;      // write average formula 
   console.log(average);

}
average (housePrices);


// create a function that takes an array as parameter and returns the median of that parameter

function median (housePrices){ 

    function sortNumber(a, b) { // creating function to sort number in ascending order
    return a - b;
}
housePrices.sort(sortNumber);
console.log(housePrices);
let arrayLength = housePrices.length;

if (arrayLength % 2 === 1){    // find the middle number in the array  If the number of the element in array are odd 

const theMedian1 = (arrayLength-1)/2 
const median = housePrices[theMedian1]     // find the median 
console.log(median);

} 
// If the number of the element in the array are even so there is no "middle" number. Because of this, the median of the list will be the average of the middle two values within the list.

else {

// The middle two numbers here are (housePrices.length/2) and (housePrices.length/2 +1):
const x = arrayLength/2 ;
const y = arrayLength/2 +1 ;

const firstValue = housePrices[x];
const secondValue = housePrices[y];

const theMedian2 = Math.round((firstValue+secondValue)/2);

console.log(theMedian2);
}

}
median (housePrices)
//Now create a function that calculates the median and the average and returns these two value in an object.

