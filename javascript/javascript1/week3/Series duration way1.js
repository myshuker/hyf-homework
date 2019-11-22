        // Series duration of my life

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
// creating array of series
const seriesDurations = [series1,series2,series3,series4]

// Here I try to find the solution in a traditional way ... 😂😂😂😂😂

/* // calculate how many days
          const timeInDays = series1.days + series2.days +series3.days + series4.days  
          console.log(timeInDays);

          // calculate how many hours
          const timeInHours = series1.hours + series2.hours +series3.hours + series4.hours
          console.log(timeInHours);

          // calculate how many minutes
          const timeInMinuts = series1.minutes + series2.minutes +series3.minutes + series4.minutes
          console.log(timeInMinuts);
            

          // calculate how many minutes for all days 
          const totalTimeInMintues = ((timeInDays*24 + timeInHours)*60 + timeInMinuts) ;
          console.log(totalTimeInMintues); */
 
//  another way .. calculate how many minutes I spend for each movie alone
const minSeries1 = ((series1.days * 24) +series1.hours )*60 + series1.minutes ;
console.log(minSeries1);
const minSeries2 = ((series2.days * 24) +series2.hours )*60 + series2.minutes ;
console.log(minSeries2);
const minSeries3 = ((series3.days * 24) +series3.hours )*60 + series3.minutes ;
console.log(minSeries3);
const minSeries4 = ((series4.days * 24) +series4.hours )*60 + series4.minutes ;
console.log(minSeries4);

const sumAllMin = minSeries1 + minSeries2 + minSeries3 + minSeries4
console.log(sumAllMin);


 // calculate how many minutes in 80years
 const min80Years= 80*365*24*60;
 console.log(min80Years);

 const percentage1 = minSeries1 *100 / min80Years
 const preSeries1 = "Breaking Bad took " + percentage1.toFixed(3) +" % "+ "of my life"
 console.log(preSeries1);
 

 const percentage2 = minSeries2 *100 / min80Years 
 const preSeries2 = "Arrow took " + percentage2.toFixed(3) +" % "+ "of my life"
 console.log(preSeries2);

 const percentage3 = minSeries3 *100 / min80Years 
 const preSeries3 = "The Mandalorian took " + percentage3.toFixed(3) +" % "+ "of my life"
 console.log(preSeries3);

 const percentage4 = minSeries4 *100 / min80Years
const preSeries4 = "Prison Break took " + percentage4.toFixed(3) +" % "+ "of my life"
 console.log(preSeries4);          