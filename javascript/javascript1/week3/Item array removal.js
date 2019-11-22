                    // Item array removal
/* 
//I dont know if this correct way ...just for trying...

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

console.log(names);

delete names[5]; // deleting the items that equal to nameToRemov

console.log(names); */


const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad'; 
console.log(names);

console.log(names.indexOf("Ahmad"));  // findeing index of Ahmad

names.splice(1,1);// delete the index numder 1 = Ahmad
console.log(names);



