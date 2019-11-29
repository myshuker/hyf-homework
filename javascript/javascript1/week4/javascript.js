
            //Voice assistant
 
let namePackage =[];
//console.log(namePackage);
let       todos = [];
let favoriteDishes = [];
let calendar = [];
let event = [];
let number=[];
console.log(number);

function getReply(command) {                            // create a function 
  //command = command.toLowerCase();
  let commandSplit = command.split(" ");           // split the command to array
    console.log(commandSplit);
    
    //let array = splitCommand
    if (command == "") {                                // if the input is empty 
        return ('Please Write something')            
    }  
    if (command == "How are you?") {                                // if the input has (How are you?)
        return ("I am fine..")
        //console.log("I am fine..");         
    }     // - 1 -       
    if (command !== "" && command.includes("Hello") ) {            // if the input doesn't empty and has (Hello my name is)
         
         let lastWord = commandSplit[commandSplit.length-1];         // determine the last element in the array
              //console.log(lastWord);
              namePackage.push(lastWord);
              //console.log(namePackage);   
       return (`nice to meet you ${namePackage}`);
    }    //  - 2 - 
     if (command =="What is my name") {              // if the input Ask about name
        return (`Your Name is ${namePackage}`);
       // console.log(`Your Name is ${namePackage}`);                 
  }      //  - 3 -          Add fishing to my todo
   if (command.includes("Add") && command.includes("fishing") ) {
       todos.push(commandSplit[1]);
        return ("fishing added to your todo");  
          //console.log(todos);        
  } 
      //  - 4 -          Add singing in the shower to my todo
      if (command.includes("Add") && command.includes("singing") ) {
  
            todos.push("singing in the shower")
            return ("fishing added to your todo");    
              //console.log(todos);
  } 
  //  - 5 -          Removing fishing to my todo
if (command.includes("Remove" && "fishing") ) {
    
    todos.shift(commandSplit[0])
    //console.log(todos);
    return ("Removed fishing from your todo");    
  }
//   -6-  What is on my todo?
if (command.includes("What" && "todo") ) {
       
    //console.log(todos);

    return (`You have ${todos.length} todos - ${todos.toString()}`);
  }
//   -7-  What day is it today?
if (command.includes("What" && "today") ) {
    let day = new Date();
    let year = day.getFullYear();
    let date = day.getDate();
    let month = day.getMonth();
    let monthsName = ['January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'];
    let monthAsString = monthsName[month]; // month as number is the index in array
    return (`${date}. of ${monthAsString} ${year}`);
    //console.log(`${date}. of ${month} ${year}`); 
}
         // - 8 -  Calculator simple math.
if (command.includes(' ')) {
 number.push(commandSplit[2])
 let xAsString =  commandSplit[2];
 let yAsString = commandSplit[4];

 let xInteger = Number(xAsString);   // To convert String to number
 let yInteger = Number(yAsString);
 
 let a = xInteger;
 let b = yInteger; 

        if (command.includes("+")){         // what is 4 + 3
           return (a+b)  
           //console.log(a+b);  
        }    
        else if (command.includes("-")){        //what is 7 - 3
          return (a-b)  
          //console.log(a-b);  
        }     else if (command.includes("*")){      //what is 7 * 3
          return (a*b)  
          //console.log(a*b);  
        }       else if (command.includes("/")){      //what is 15 / 3
          return (a/b)  
          //console.log(a/b);  
        }          
}      
        //  - 9 - My favorite dish is lasagne
if (command.includes("My favorite dish")) {    

          favoriteDishes.push(commandSplit[4])
            console.log(favoriteDishes);
          return ('Your dish is saved to the favourite dish.')  
}

        // - 10 - What is my favorite dish
if (command.includes("What") && command.includes("favorite") ) {
        console.log(favoriteDishes);        
        return favoriteDishes;
}
         // - 11 - Set a timer for 4 minutes
if (command.includes('Set' && 'timer')) {
        
        let setTime = commandSplit[4];   // the index of time number in command
        let toMilliSecond = setTime*60*1000 // time in milliseconds
        let myFunction = function() {           // this function to execute the command when 4 min pssed 
                return('Timer done');
              }         
        return setTimeout( myFunction, toMilliSecond)  ;
} 
        // - 12 - Add Bike ride the 3/5/2019 to my calendar
if (command.startsWith('Add') && command.includes('my calendar')) {
  commandSplit.splice(0, 1); 
  commandSplit.splice((commandSplit.length) - 3, 3);
  let date = commandSplit.splice((commandSplit.length) - 1, 1); 
  let dateEvent = date.toString(); 
  commandSplit.splice((commandSplit.length) - 1, 1);
  let nameEvent = commandSplit.join(' ');
   
  calendar.push({ 
    name: 'nameEvent', 
    date: 'dateEvent', 
          });
//  console.log(calendar);
//  console.log(`${nameEven} added to your calendar`);
 return (`${nameEvent} added to your calendar`);
  
}
      // - 13 - What am I doing this week?
if (command.startsWith('What') && command.includes('this week?')) {
  let day = new Date();
  let year = day.getFullYear();
  let date = day.getDate();
  let month = day.getMonth();
  let monthsName = ['January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'];
  let monthAsString = monthsName[month]; 

return (`This week you have ${calendar.length} event: ${date}. of ${monthAsString} ${year} `)
} 

} 
  console.log(getReply(""));
  console.log(getReply("How are you?"));
  console.log(getReply("Hello my name is Benjamin"));
  console.log(getReply("Hello my name is Mohammad"));
  console.log(getReply("Hello my name is HackYourFuture"));
  console.log(getReply("What is my name"));
  console.log(getReply("Add fishing to my todo"))
  console.log(getReply("Add singing in the shower to my todo"))
  console.log(getReply("Remove fishing from my todo"))
  console.log(getReply("What is on my todo?"))
  console. log(getReply("What day is it today?"))
  console.log(getReply("what is 4 + 3")) ;
  console.log(getReply("what is 7 - 3"));
  console.log(getReply("what is 7 * 3")) ;
  console.log(getReply("what is 15 / 3")) ;  
  console.log(getReply("My favorite dish is kebab"))
  console.log(getReply("What is my favorite dish"))
  console.log(getReply("Set a timer for 4 minutes")) 
  console.log(getReply("Add Bike ride the 29/11/2019 to my calendar"));
  console.log(getReply("What am I doing this week?"));
       