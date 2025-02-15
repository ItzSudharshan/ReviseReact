import { useState } from "react";
import React from 'react'

export default function Payment({user}){
    const [click, setClick] = useState(false);

    if(click){
        return(
            <>
            <h2>Payment from USER: {user.name} is Successfull</h2>
            <h2>Remaining balance is: {user.balance - 500}</h2>
            </>
        )
    }

  return (
    <div>
        <h1>This is the Payment Component</h1>
        <button onClick={() => setClick(true)}>Receipt</button>
    </div>
  )
}
