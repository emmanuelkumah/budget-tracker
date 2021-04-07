import React from "react";
import { useHistory } from "react-router-dom";

function Dashboard({ user, handleLogOut }) {
  //redirect user to home page after log out
  let history = useHistory();

  const redirect = () => {
    //logout user
    handleLogOut();
    //redirect user to home page after log out
    history.push("/");
  };
  return (
    <div>
      <h1>Dashboard page</h1>
      <h3>welcome {user.displayName}</h3>
      <button onClick={redirect}>Log out</button>
    </div>
  );
}

export default Dashboard;
