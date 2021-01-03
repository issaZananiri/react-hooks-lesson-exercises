import React from 'react'
import  { useState } from "react"
export default function Exercise1() {
  // your code here
  const [counter, setCounter] = useState(0)

  const increase = () => setCounter(counter + 1)
  const decrease = () => setCounter(counter - 1)

  return (
    <div>
    <p>{counter}</p>
    <button onClick={decrease}>Decrease</button>
    <button onClick={increase}>Increase</button>
  </div>
  )
}