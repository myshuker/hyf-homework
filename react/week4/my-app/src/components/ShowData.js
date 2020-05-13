import React from 'react';
import context from "../context";




function ShowData(){
  
  const { inputValue, users, isLoading } = React.useContext(context);
  return(   
   <ul>     
     {isLoading ? <h3>loading ....</h3> 
     :
     {users.map(user =>{
       return(
        <li key={user.id}>{user.login}</li> 
       )
     }  )}
     
     } <hr/>
   </ul>
  )
}
export default ShowData;
