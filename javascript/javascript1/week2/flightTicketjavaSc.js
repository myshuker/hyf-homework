
        //Smart-ease - Goes Global!


// the first step

function getFullname(firstname,surname) {

  //console.log(getFullname());
  return firstname + " " + surname;

}

getFullname('Benjamin', 'Hughes');  



 // the secound step adding (useFormalName)

 function getFullname(firstname,surname,useFormalName) {

    if (useFormalName == true) {
    
      return "Lord" + " " + firstname + " " + surname
    } else {
      return firstname + " " + surname;
    }
    }
    
    getFullname('Benjamin', 'Hughes', true);  

/* 
    
        // solution in defferent words
function getFullname(firstname,surname,useFormalName){
    alert("Please enter you first and last name");
    
    let fullname1 = firstname;
    let fullmale2 = surname;
    //here just if the customer checked a checkbox then its true.
if (useFormalName == true){
    return "Lord " + firstname + surname;

}
else {
    return "Please " + firstname + surname + " you need to chack verifiy a checkbox"; //here just if the customer checked a checkbox then its true.
}
}
getFullname();
let fullNamePrinting =getFullname("Benjamin ", "Hughes", false);
console.log(fullNamePrinting) ;

 */

 
  // solution in defferent code /and I prefer this solution

function getFullname(firstname, lastname, useFormalName) {
  
  // it will be done if the firstname and lastname is written and if useFormalName was checked
  
  if (firstname && lastname && useFormalName) {

      fullname =  firstname + " " + lastname;
      return "Lord" + " " + fullname;

      //this will be done if user dosent write fristname or lastname

  } else if (!firstname || !lastname) {

      alert ("Please enter the first name and the last name");
      // this will be done when the user has write the both foirstname and lastname
  } else {
    
      return fullname;
  }
}

let fullNamePrinting = getFullname("Benjamin", "Hughes", true);
console.log(fullNamePrinting);
