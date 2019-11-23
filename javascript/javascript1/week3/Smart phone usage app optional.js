//manage smart phone usage

// adding activities.
let activities=[];
function addActivity(action){           //create a function to make the user to add activitrs
    activities.push(action);
}
addActivity({                    // adding some activities
    date: " 23/7-18",
    activity : "Youtube",
    duration: 30,
});
addActivity({
    date: " 24/7-18",
    activity : "facebook",
    duration: 50,
}); 



console.log(activities);

//Show my status
// here we calculate how many min useing activities (totalDuration)
let totalDuration = 0; 
for( let i =0; i<activities.length; i++ ){
    totalDuration = totalDuration +activities[i].duration;
}
console.log(totalDuration);  
let result = "You have added " + activities.length  + " activities. " + "They amount to " + totalDuration + " min. of usage."
function showStatus(time){
    if (activities.length !== 0) {
            console.log(result);
          }else {

            console.log("Add some activities before calling showStatus");
          }
}
showStatus();      // invok function


// Usage limit

function usageLimit() {
let limit = 100;        //  set a limitation is 100 min
if (totalDuration<= 100){
    console.log("you can add morer acticities");
    } else {
        console.log("You have reached your limit, no more smartphoning for you!");
        
    }
}
usageLimit() ;

