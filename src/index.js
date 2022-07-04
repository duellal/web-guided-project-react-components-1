import React from 'react'
import { render } from 'react-dom'

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
    - mainly used with testing or accessibility
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

//Building the React component using a function declaration below
/* React Rules:
    - the function name must be Capitalized
      - to know that it is React being used b/c it uses both JS and HTML 
      - that is is a React component and not a HTML component
    - need to input a variable (below: props) for React to interact with 
      - way to pass data around
    - always have to return something 

JSX:
  - HTML like syntax used inside of React

If you want to add a class for styling purposes can ONLY USE className = 'name'

{} inside of JSX element:
  - getting access to the variable passed in
*/

function App(props) {
  /*
  Creating a new variable to do destructuring 

  Destructuring = making the element props equal to the variables being used
    - This allows you to not need to use the props element to call the variables 
      - Instead of {props.track} => {track}
    - Lets you know what you need to use in order to make it work
      - If you don't use a variable, an error will occur
  */
  const { track, instructor, happy, date, Array, week } = props
  return (
    /* When returning UI - there needs to be a wrapper div around EVERYTHING or it will cause an error

      Can use either a <div> JSX content </div> or <> JSX content </>

      <> JSX content </> won't make a container around everything
    */
    <div className='container'>
      <h1>Welcome to React, {track} rockstars!!</h1>
      <h3>Meet your instructor {instructor}</h3>
      {happy ? <div>Estatic</div> : <div> Very bad day :( </div>}
      <br></br>
      <div>Today is {date}</div>
      <p>An array of random numbers: {Array}
        <br></br>
        *Trying to make an array component on my own.</p>
      <div>It is week {week}</div>
    </div>

    /* 
    {happy ? <div>Estatic</div> : <div> Very bad day :( </div>}
    
    The above code is saying: 
      If the varaible happy is true, then make a div with the text 'Estatic', otherwise make a div with the text 'Very bad day :('
    */
  )
}


/* Normally only use render once per app

Render takes in 2 arguments:
  1) Component - React
  2) Where you are attaching the component
*/
// Invoking the above function declaration - React
render(
  //Below track='Web' is passing in the props
  <App track='Web' instructor='Fiona Lemontart' happy={true} date='July 4th, 2022' Array={[16, 29, 55, 1, 30, 29]} week={2} />,
  //Putting the React Component into the DOM
  document.querySelector('#root')
)

/* Q+A:
Does the value of the key from the property need to be a string?
- Not necessarily, you can passing booleans, numbers, strings, object, array(?) etc.
*/