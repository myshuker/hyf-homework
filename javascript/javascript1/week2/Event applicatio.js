//Event application Calculater

function getEventWeekday(xDays){
// creating an array with days of the week
    const arrDays =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = new Date();
   let  today = arrDays[day.getDate()];

    let eventDay = today + xDays ; arrDays[(xDays+day)%7]
    return eventDay;
}

event ="The event will be on: " + getEventWeekday(9);
console.log(event); 
