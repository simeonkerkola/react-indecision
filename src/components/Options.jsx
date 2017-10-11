import React from 'react'
import Option from './Option.jsx'

// Render new tag to each option
const Options = (props) => {
  const options = props.options
  return (
    <div>
      {/* <p>You have: {options.length} options</p> */}
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      <br/>
      {options.length ? <label>Your options: </label> : <label>No options yet</label>}
      {
        options.map(option => (
          <Option
            key={option} optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  )
}

export default Options
