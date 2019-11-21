/*     const theDate = new Date();
    const today  = theDate.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(days.length);

    
  function getEventWeekday(daysUntil){
    
    if (days.length-1 < daysUntil) {
        const remainder = daysUntil % days.length;
        const eventDay1 = today + remainder;
        console.log(days[eventDay1]);
    } else {
        const eventDay2 = today + daysUntil;
        console.log(days[eventDay2]);
      }
}
getEventWeekday(2);
 
  */

 /* let day = new Date();
 let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 let today = daylist[day.getDay()];
 function getEventWeekday(eventIn) {
   
        if (eventIn > daylist.length) {
        let reminder;
        reminder = eventIn % daylist.length;
        console.log(`The event will be held on ${daylist[day.getDay() + reminder]}`);
       
    } else {
        console.log(`The event will be held on ${daylist[day.getDay() + eventIn]}`);
    }

}


getEventWeekday();  */

    const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const today =new Date(); 
    const numDay=today.getDay(); 
    const nutoday = weekDays[numDay]; 

function getEventWeekday(givenDay){
    
    let eventDay =(givenDay % weekDays.length + numDay) % weekDays.length; 
    let eventWeekDays=weekDays[eventDay]; 
    
    console.log(eventWeekDays);
    
    }
    
    getEventWeekday(1);
