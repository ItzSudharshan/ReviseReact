import Shopping from './Shopping';
import { useState } from 'react';
import React from 'react'

export default function Login({user}){

    const[click, setClick] = useState(false)

    if(click){
        return(
            <Shopping user = {user} />
        )
    }
  return (
        <div>
            <h1> This is the Login Component</h1>
            <h2> Welcome {user.name}</h2>
            <h2> Your Balance Left is {user.balance}</h2>
            <button onClick={() => setClick(true)}>Shopping</button>
        </div>
  )
}

