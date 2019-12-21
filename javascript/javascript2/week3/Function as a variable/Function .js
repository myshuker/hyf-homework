
      // Function as a variable

 // 1- Create an array with 3 items. All items should be functions.
 const func1 = () => console.log("This is the first function");
 const func2 = () => console.log("This is the second function ");
 const func3 = () => console.log("This is the last function ");
 
 const array = [func1, func2, func3];
 
 array.forEach(func => func());
 
 // 2- Create a function as a const and try creating a function normally.
 const funcX = function() {};
 // as arrow function it will be as :
 //const funcX = () => console.log('function as const');
 
 function funcY() {
   console.log("Normal function");
 }
 funcX();
 funcY();
 
 // 3- Create an object that has a key whose value is a function.
 const nameFunc = () => console.log(" Function as an value in object");
 const FuncObject = {
   name: nameFunc
 };
 FuncObject.name();
 