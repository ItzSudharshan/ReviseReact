import React from "react";
import { useState } from "react";
import Payment from './Payment'


export default function Cart({user}){

    const[click, setClick] = useState(false)

    if(click){
        return(
            <Payment user = {user}/>
        )
    }
  return (
    <div>
      <h1>This is Cart Component</h1>
      <h2>Your balace is ₹{user.balance}, Purchase item of ₹500 will be deducted...</h2>
      <button onClick={() => setClick(true)}>Payment</button>
    </div>
  )
}

