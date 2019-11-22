        // My favorite songs


const songDatabase = [{  // create array of some songs 
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];

const myPlaylist = [songDatabase];
//console.log(myPlaylist);

function addSongToDatabase(song){      //create function to let me add a song to the songDatabase array.
       songDatabase.push(song);           // Using push to add songs 
}
 
addSongToDatabase({         // add song nu 5
    songId: 5,
    title: 'Shape of You',
    artist: 'Ed Sheeran',
  });

  addSongToDatabase({           // add song nu 6
    songId: 6,
    title: 'Roar',
    artist: 'Katy Perry',
  });

  addSongToDatabase({           // add song nu 7
    songId: 7,
    title: 'Girls Like You',
    artist: 'Maroon',
  });


//console.log(myPlaylist);          // printing the data base after adding the songs


        // Searching for a song

 //songDatabase.indexOf();       //to find the index of the object in the songDatabase array
    let searchedSong = [];

function getSongByTitle (title){               
    for ( let i=0; i<songDatabase.length; i++){    
         if (title === songDatabase[i].title){       // searching about song listed in hte data base
              searchedSong.push( songDatabase[i]);
             
              
        } 
   return searchedSong;
   }

   if (title !== songDatabase[i].title){          // searching about song doesnt listed in hte data base
    console.log("there are no song match this title");  
} 
}

getSongByTitle("Girls Like You");
getSongByTitle("Shape of You");
getSongByTitle("My baby");
getSongByTitle("Who do you love");   // IT DOSENT WORK BUT I DONT KNOW 😭😭😭😭

console.log(searchedSong);