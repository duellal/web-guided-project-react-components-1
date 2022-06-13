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

import React, { useState } from 'react';

function Playground(props) {
  const [count, setCount] = useState(0);
  
  return (
    <div className="container">
      <h1>HELLOOOOOOOO WORLD!</h1>
      <h3>The count is: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment Count!</button>
    </div>
  )
}

// NEVER, EVER, EVER, EVER, EVER, EVER MUTATE STATE DIRECTLY

export default Playground;