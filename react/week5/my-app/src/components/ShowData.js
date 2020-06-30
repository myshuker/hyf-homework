import React from "react";
import context from "../context";

function ShowData() {
  const { users } = React.useContext(context);
  return (
    <ul>

      {users.map((user) => {
        return (
          <li style={{ listStyleType: "none" }} key={user.id}>
            {user.login}
          </li>
        );
      })}

    </ul>
  );
}
export default ShowData;
