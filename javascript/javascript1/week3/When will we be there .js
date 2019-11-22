        // When will we be there??

const travelInformation = {         // create object of the elements(speed, destinationDistance)
    speed: 50,
    destinationDistance: 432,
  }; 
    
  function speedInKmPerHour (travelInformation){ // function of speed 
    const time =  travelInformation.destinationDistance / travelInformation.speed ;   // speed law in physics 
    const reminder = travelInformation.destinationDistance % travelInformation.speed;   //  finding the reminder 
    console.log(reminder);
    
    const hours = Math.floor(time);
    const travelTime = " The time it will take " + hours + " hours " + reminder + " minuts to arrive at your destination."
    console.log(travelTime);
  }
 speedInKmPerHour(travelInformation); //calling the function 
 
///////////////////////////////////////
            //  another way 

   const travelInformation = {         // create object of the elements(speed, destinationDistance)
            speed: 50,
            destinationDistance: 432,
            }; 
              
function speedInKmPerHour (travelInformation){ // function of speed 
    const speedInMin = travelInformation.speed / 60;  // convert the speed to be in km/min
    const timeInMin =  travelInformation.destinationDistance / speedInMin ;   // speedInMin law in physics 
    const timeInHours = timeInMin / 60;        // times in hours 
    const hours = Math.floor(timeInHours);       // here to round the hours to the real number down  
    const reminder = timeInMin % 60;   //  finding the reminder 
    const reminderInMIN = Math.round(reminder)
    console.log(reminderInMIN);

    
    const travelTime = " The time it will take " + hours + " hours " + reminderInMIN + " minuts to arrive at your destination."
    console.log(travelTime);
  }
 speedInKmPerHour(travelInformation); //calling the function
  
 