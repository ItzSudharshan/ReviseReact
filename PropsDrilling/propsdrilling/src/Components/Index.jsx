import {  useState } from "react";
import Login from './Login';
import './test.css';
import React from 'react'

export default function Index(){

    const[click, setClick] = useState(false);

    const user = {
        name: "Sudharshan Nayak",
        balance: 25000
    }

    if(click){
        return(
            <Login user = {user} />
        )
        
    }
  return (
    <div>
      <h1>This is Index Component</h1>
      <button onClick={() => setClick(true)}>LOGIN</button>
    </div>
  )
}


