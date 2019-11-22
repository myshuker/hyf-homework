        // Series duration of my life
//  Here the solution with for loop
// creating objects of my watching series
const series1 = {
    title: 'Breaking Bad',
    days: 1,
    hours: 22,
    minutes: 30,  
  };
const series2 = {
title: 'Arrow',
days: 4,
hours: 23,
minutes: 0,
};
const series3 = {
title: 'The Mandalorian',
days: 0,
hours: 5,
minutes: 20,
};
const series4 = {
title: 'Prison Break',
days: 2,
hours: 18,
minutes: 0,
};

const seriesDurations = [series1,series2,series3,series4]  // creating array of series

const min80Years= 80*365*24*60;  // calculate how many minutes in 80years
//console.log(min80Years);
    

//let timeInDays = 0;            // create variables
 //let timeInHours = 0;
 //let timeInMinuts = 0;

for ( let i = 0; i<seriesDurations.length; i++){     //  for loop   
    let daysInMinuts = seriesDurations[i].days *24*60 ; // calculate how many minutes equal for days whatching for every series 
    //console.log(daysInMinuts);
    let hoursInMinuts = seriesDurations[i].hours *60 // calculate how many minutes equal for hours whatching for every series 
    let totalTimeDaysInMintues = daysInMinuts + hoursInMinuts + seriesDurations[i].minutes  //calculate how many total minutes for every serires
    //console.log(totalTimeDaysInMintues);

    const percentage = totalTimeDaysInMintues *100 / min80Years   // calculate how mush percentage for every serires
    const roundPres = percentage.toFixed(3)              // round the numder to 3 number decimal
    //console.log(roundPres);

    const preSeries = seriesDurations[i].title + " " + roundPres +" % "+ "of my life"   // log out the final text 
    console.log(preSeries);

}

  
