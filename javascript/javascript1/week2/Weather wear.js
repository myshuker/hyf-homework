//Weather wear

function WeatherTemprature(temprature){


    if (temprature<=20){
        return "its cold and you should wear a coat"
    }else{

        return "its warn and you can wear shorts and a t-shirt"
    } 
}

let wearClothes = WeatherTemprature(17);
console.log(wearClothes);