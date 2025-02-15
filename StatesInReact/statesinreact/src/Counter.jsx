import React from "react";
import { useState } from "react";
import './Counter.css';
export const Counter = () => {
    const [count , setCount] = useState(0);


    const incrementCounter = () => {
        setCount(count + 1)
    }

    const decrementCounter = () => {
        setCount(count - 1)
    }

    const resetCounter = () => {
        setCount(0)
    }
    return(
        <div>

        <h1>Count: {count}</h1> 
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={resetCounter}>Reset</button>
        
        </div>
    )

}