import React from "react";
import user from "./authContext";
import {useContext} from "react"

function LoginApp(props) {
  const { userLogin, setUserLogin } = useContext(user);
  const handleLogOut = (e)=>{
      
      setUserLogin({})

  } 
  return (
    <div style={{margin:20}}>
      <h1>hello {userLogin.name}</h1>
      <button onClick={()=>handleLogOut()}>LOGOUT</button>
    </div>
  );
}

export default LoginApp;
