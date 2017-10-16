import React from 'react'
import Option from './Option.jsx'

// Render new tag to each option
const Options = (props) => (
  <div>
    {/* <p>You have: {options.length} options</p> */}
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
        >
          Remove All
        </button>
      </div>
      {!props.options.length && <p className="widget__message">No options yet</p>}
      {
        props.options.map((option, index) => (
          <Option
            key={option}
            optionText={option}
            count={index + 1}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
    }
  </div>
)

export default Options
