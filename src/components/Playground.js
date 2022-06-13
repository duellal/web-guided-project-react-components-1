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
  const [spinnerOn, setSpinnerOn] = useState(false);
  const [error, setError] = useState("");
  const [weapon, setWeapon] = useState("");
  const [winMessage, setWinMessage] = useState("");

  const updateCount = (amount) => {
    if (count + amount < 0) {
      setError("Can't go below 0 ya chump!");
      return;
    } else if (count + amount > 10) {
      setError("Can't go above 10 ya chump!");
      return;
    }
    setCount(count + amount);
    setError("");
  }

  const weaponChoice = (choice) => {
    const weapons = ["rock", "paper", "scissors"];
    const compChoice = weapons[Math.floor(Math.random() * 3)];
    if (choice === "paper" && compChoice === "rock") {
      setWinMessage("YOU WON!");
    } else if (choice === "rock" && compChoice === "scissors") {
      setWinMessage("YOU WON!");
    } else if (choice === "scissors" && compChoice === "paper") {
      setWinMessage("You WON!");
    } else {
      setWinMessage("SUCKER YOU LOST!")
    }
  }

  if (spinnerOn) {
    return (
      <div className="container">
        <h3>The spinner is {spinnerOn ? "ON" : "OFF"}</h3>
        <button onClick={() => setSpinnerOn(false)}>Toggle Spinning Icon</button>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>HELLOOOOOOOO WORLD!</h1>
      {error && <h2>{error}</h2>}
      <h3>The count is: {count}</h3>
      <button onClick={() => updateCount(1)}>Increment Count!</button>
      <button onClick={() => updateCount(-1)}>Decrement Count!</button>
      <h3>The spinner is {spinnerOn ? "ON" : "OFF"}</h3>
      <button onClick={() => setSpinnerOn(true)}>Toggle Spinning Icon</button>
      {winMessage && <h3>{winMessage}</h3>}
      {weapon ? <h3>The current weapon is: {weapon}</h3> : <h3>Pick a weapon ya chump!</h3>}
      <button onClick={() => weaponChoice("rock")}>Pick ROCK</button>
      <button onClick={() => weaponChoice("paper")}>Pick PAPER</button>
      <button onClick={() => weaponChoice("scissors")}>Pick SCISSORS</button>
    </div>
  )
}

// NEVER, EVER, EVER, EVER, EVER, EVER MUTATE STATE DIRECTLY
// WAT?! is state?............................
// data that lives in the component itself

export default Playground;