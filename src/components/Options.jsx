import React from 'react'
import Option from './Option.jsx'

// Render new tag to each option
const Options = (props) => (
  <div>
    {/* <p>You have: {options.length} options</p> */}
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    <br/>
    {props.options.length ? <label>Your options: </label> : <label>No options yet</label>}
    {
      props.options.map(option => (
        <Option
          key={option} optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
)

export default Options
