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
  return (
    <div className='container'>
      <h1>Welcome to React, {props.track} rockstars!!</h1>
      <h3>Meet your instructor {props.instructor}</h3>
    </div>
  )
}

//Invoking the above function declaration - React
render(
  //Below track='Web' is passing in the props
  <App track='Web' instructor='Fiona Lemontart' />,
  //Putting the React Component into the DOM
  document.querySelector('#root')
)