import Form from "./Form";
import Login from "./Login";
import Register from "./Register";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import React, { useState, useContext } from "react";
import user from "./component/authContext";
import LoginApp from "./component/LoginApp";

const App = () => {
  const { userLogin, setUserLogin } = useContext(user);
  console.log("userLogin:"+userLogin.name)

  return (
    <div dir="rtl" >
      {userLogin.name==undefined?<Form/>:<LoginApp/>}
     
    </div>
  );
};

export default App;
