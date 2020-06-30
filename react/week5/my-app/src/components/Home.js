import React from "react";
import context from "../context";
import ShowData from './ShowData'

function Home() {
  const { handelUserSearch } = React.useContext(context);

  return (
    <div>
      <h1>Github users search App.</h1>
      <input
        type="text"
        
        placeholder="search for user"
        onChange={handelUserSearch}
      />
       <ShowData />
    </div>
  );
}
export default Home;
