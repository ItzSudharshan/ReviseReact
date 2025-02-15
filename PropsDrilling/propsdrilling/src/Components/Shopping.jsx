import { useState } from "react";
import Cart from './Cart'

import React from 'react'

export default function Shopping({user}){
    const[click, setClick] = useState(false)

    if(click){
        return (
            <Cart user = {user}/>
        )
    }

  return (
    <div>
        <h1>This is the Shopping Component</h1>
        <h2>Your balance is {user.balance}</h2>
        <h2>Your Purchase item  TYPE C Cable of ₹500 is Selected</h2>
        <button onClick={() => setClick(true)}>Cart</button>
    </div>

  )
}

