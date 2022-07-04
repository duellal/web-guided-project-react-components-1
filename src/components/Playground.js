/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/

import React, { useState } from 'react'

/* State:
React has a hook called useState()
  - helps keep track of data

  - Need to import it using {useState}

  useState() syntax:
    const [arg1, setArg1] = useState(arg2)

      arg1 = variable used in JSX
      setArg1 = is a callback function to change or update the state
      arg2 = what the state starts with - the initial value

*/

export default function Playground(prop) {
  const [count, setCount] = useState(0);
  const [spinnerOn, setSpinnerOn] = useState(true);
  const [choice, setScissors] = useState('scissors')

  if (spinnerOn) {
    return (
      <div className='container'>
        <h6>Loading...</h6>
        {/* Below is my code to turn off spinner - toggling the spinner off*/}
        <button onClick={() => { setSpinnerOn(false) }}>Turn spinner off</button>
      </div>
    )
  }

  const { cohort } = prop;
  return (
    /* Toggling the spinner on */
    < div className='container' >
      <button onClick={() => { setSpinnerOn(true) }}>Turn spinner on</button>

      <h1>{cohort} is currently learning React! </h1>

      <div>The count is {count}</div>
      <button onClick={() => { setCount(count + 1) }}>Add to Count</button>

      <h3> The current choice is {choice}</h3>
      <button onClick={() => { setScissors('rock') }}>Pick rock</button>
      <button onClick={() => { setScissors('paper') }}>Pick paper</button>
      <button onClick={() => { setScissors('scissors') }}>Pick scissors</button>
    </div >
  );
};


/* Q+A:
What happens when the index.js App gets long?
- normally you would invoke functions to the App in the index.js from other js files

What does 'export default' on line 14 do?
- To export the Playground component without needing to import it with the curly brackets around it
*/