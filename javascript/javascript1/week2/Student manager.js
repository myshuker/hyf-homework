     //Student manager
let  class12Students = [];
//let  class12Students = ["John","Philip","Samantha", "Christopher","Johanna"];

function addStudentToClass(studentName) {
    class12Students.push(studentName);

   //addStudentToClass function

   // if Queen added to the class and the class has 6 student.
 if (class12Students.lenght>=6 && studentName==="Queen"){
    class12Students.push(Queen);
    }
    
//If more students are tried to be added
else if (class12Students.lenght>=6) {
    console.log("Cannot add more students to class 12.");
} 

// if the same person  added to the class.
else if (class12Students.includes(studentName))  {
    return "Student " + studentName + " " + "is already in the class."
}

//if  an empty string add to a class.
else if (studentName==="") {
    return "Sorry you cant add an empty name"
}
}

//getNumberOfStudents function
function getNumberOfStudents(){
    return class12Students.length;
}

//Add some students to the class
addStudentToClass("Queen");
addStudentToClass("Samantha");
addStudentToClass("Martin");

console.log(getNumberOfStudents());