import React from 'react'
import { render } from 'react-dom'

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/

function App({cohort, track, happy, name}) {
  // const {cohort, track, happy, name} = props
  /**
   * const cohort = props.cohort;
   * const track = props.track;
   * const happy = props.happy;
   * const name = props.name;
   */
  return (
    <div className='container'>
      {/** 
       *   const divElem = document.createElement("div");
       *   divElem.classList.add("container");
       */}
      <h1>Welcome to React, {track} {cohort} rockstars!!</h1>
      <p>Your instructor's name is: {name}</p>
      { happy ? <p>I'M HAPPY IT'S FRIDAY!</p> : <p>IT'S MONDAY BOOOO</p> }

    </div>
  )
}

// props are data passed from a parent component to a child

/**
 * 1.) Objects
 * 2.) Arrays
 */

render(
  <App track='Web' name='casey' happy={false} numStudents={20} cohort={56} />,
  document.querySelector('#root')
)

/**
 * const props = {
 *   track: 'Web',
 *   name: 'casey',
 *   happy: 'NOOO'
 * }
 * App(props);
 */