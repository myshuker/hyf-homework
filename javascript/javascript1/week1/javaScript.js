
// console.log("Freecodecamp username: " + "@myshuker");

        // future age calculator :
        let yearOfBirth = 1978; //type of variable is number.
        let yearFuture = 2045; //type of variable is number.
        let age = yearFuture - yearOfBirth
        
        console.log(age);
        
         //log out :
        
        console.log("You will be "+ age + " years old in "+ yearFuture+ ".");
        
        // ---------------------------------------------------
                //A dog age calculator :
        
        let dogYearOfBirth = 2010; //type of variable is number.
        let dogYearFuture = 2035; //type of variable is number.
        let shouldShowResultInDogYears= false; //type of variable is boolean.
        let humanYears;
        
        let dogYear = dogYearFuture - dogYearOfBirth
        
        //Switch/case Stetment Way(1):
        
        switch(shouldShowResultInDogYears){
            case true :
                    console.log("Your dog will be "+ humanYears + " human years old in " + dogYearFuture )
        
                    break;
             case false:
                    console.log("Your dog will be "+ dogYear + " dog years old in " + dogYearFuture )
                    break;
        }
        
        // if/else Statment way(2):
                    // log out :
         
        if (shouldShowResultInDogYears) {
            console.log("Your dog will be "+ humanYears + " human years old in " + dogYearFuture )
        }       else {
            console.log("Your dog will be "+ dogYear + " dog years old in " + dogYearFuture )
        }
        
         
        //-----------------------------------------------------------------------------
        
        // in the next exercise I cant figure out why I get this message in console (TypeError: console.loge is not a function).
        
                //A house price estimator:
        
              //Vriables      //all the dimensions in meter(m).
        let wide;
        let deep;
        let high;
        let volumeInMeters;
        let gardenSizeInM2;
        let housePrice;
        
        volumeInMeters= wide * deep * high;
        housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300
               
                    // values: 
        //Peter
        wide = 8;
        deep = 10;
        high = 10;
        gardenSizeInM2 = 100;
        PeterHouseOffer =2500000 ;
        
        if (PeterHouseOffer > housePrice) {
                console.log("Alert Peter you are paying too much Because the real price is " + housePrice + ".");
        
        }  
        else {
            console.log("Note Peter the price is good Because the real price is " + housePrice + ".");
        }
        
        // Julia
        wide = 5;
        deep = 11;
        high = 8;
        gardenSizeInM2 = 70;
        JuliaHouseOffer =1000000;
        
        
        if (JuliaHouseOffer > housePrice) {
            console.log("Alert Julia the price is too much and you should pay just " + housePrice + ".");
        
        }  else {
        console.log("Note Julia the price is good Because the real price is: " + housePrice + ".");
        }
        
        
        //--------------------------------------------------------
        
                    //Startup name generator
        
        
        let firstWords  =["Pretty","Gorgerous","Magnificent","Awesome", "Strong","Cool","Talent","Creative", "Smart","Fantastic"];
        let secondWords =["Easy "," Corporate"," adventure"," developer","Simple","Funny","Great","Strong","Useful","Big"];
        let randomNumber = Math.floor(Math.random() * 10) + 0;
        
        let startupName = firstWords[randomNumber] + secondWords[randomNumber];
        
        console.log("The start up: " + startupName + " contains " + startupName.length + " characters.");
        //console.log( "The startup: " + firstWords+" "+ "contains"+ startupName .length );
        
        