
        //Smart-ease - Goes Global!
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

