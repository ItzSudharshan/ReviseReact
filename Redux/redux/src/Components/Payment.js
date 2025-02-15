import React from "react";
import { UpdateWallet } from "../Store";
import { useSelector, useDispatch } from 'react-redux'



export default function Payment() {
    const data = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(UpdateWallet(5000));
    }
  return (
    <>
      <h3>{data.username} , {data.balance}</h3>
      <button onClick={handleClick}>Pay</button>
    </>
  )
}


