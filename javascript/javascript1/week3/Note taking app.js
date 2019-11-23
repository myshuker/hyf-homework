    //Note taking app

    //create the functionality to save a note:
    let notes = [];

    function addNote (content,id){
     notes.push(content,id); 
     console.log(notes);
      
    }
    addNote ("HTML",1);    // invoking the function AND adding notes
    addNote ("CSS",2); 
    addNote ("JAVASCRIPT",3);
    
           //Create function to Get a specific note by ID
     function getNoteFromId(id){
      for( let i; i<notes.length; i++){   // for loop to looking in the note to find id match
        if (id === notes[i].id){          // here if found id match to an id object in the array
          return notes[i]
          //console.log(notes[i]);
           
        } else if(id !== notes[i].id || id !== String){
          return "an error string"
          //console.log("an error string");
          
        }
      }
            
    }
    getNoteFromId();      // invoking the function
 
            //Get all notes
      function getAllNotes() {
              return notes;
            }
            

            //Log out notes
    function logOutNotesFormatted(){
      for (let i = 0; i < notes.length; i++) {
      console.log("The note with id: " + notes[i].id + " , has the following note text: " + nodes[i].content +" .");
    }
  }


