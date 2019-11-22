                     // Item array removal
/* 
//I dont know if this correct way ...just for trying...

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

console.log(names);

delete names[5]; // deleting the items that equal to nameToRemov

console.log(names); */

  // way nu 1
const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad'; 
console.log(names);

console.log(names.indexOf("Ahmad"));  // findeing index of Ahmad

names.splice(1,1);// delete the index numder 1 = Ahmad
console.log(names);


// way nu 2 ( for loop method)

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad'; 

for(let i = 0; i <names.length; i++){

if (name[i]===nameToRemove){  // to check if the delated name is in the array 
    names.splice([i],1);
    console.log(names);
}
}