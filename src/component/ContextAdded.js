import React from 'react';
import CheckLogin from './authContext'
import  { useState } from "react";
import App from '../App';


function ContextAdded(props) {

const [userLogin, setUserLogin] = useState(false)
    return (
        <div>
            <CheckLogin.Provider value={{userLogin, setUserLogin}}>
            <App />
            </CheckLogin.Provider>
            
        </div>
    );
}

export default ContextAdded;