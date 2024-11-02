import React, { useState } from 'react'

const Two = () => {

    const [counter, setCounter] = useState(0)

  return (
    <div>
        <h1>{counter}</h1>
        <br /> <br />
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>

    </div>
  )
}

export default Two