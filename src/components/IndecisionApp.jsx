import React from 'react'

import AddOption from './AddOption.jsx'
import Options from './Options.jsx'
import Header from './Header.jsx'
import Action from './Action.jsx'
import OptionModal from './OptionModal.jsx'

export default class IndecisionApp extends React.Component {
  // constructor(props) { // constructor gets called w/ props object (same as this.props in render method)
  //   super(props)
  //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
  //   this.handleDeleteOption = this.handleDeleteOption.bind(this)
  //   this.handlePick = this.handlePick.bind(this)
  //   this.handleAddOption = this.handleAddOption.bind(this)
  // }

  state = {
    options: [],
    selectedOption: undefined
  }
  handleDeleteOptions = () => {
    // ({ this is an arrow function returning an object })
    this.setState(() => ({ options: [] }))
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }))
  }
  handlePick = () => {
    const random = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[random]
    this.setState(() => ({selectedOption: option}) )
  }
  handleAddOption = (newOption) => {
    if (!newOption) return 'Enter valid value to add item'

    // returns the index where found, or -1 if not
    else if (this.state.options.indexOf(newOption) > -1) {
      return 'This option already exists'
    }

    // We don't wanna directly manipulate the previous state
    // arr.concat(arr2) merges 2 arrays, doesn't change the existing array, but returns a new one
    this.setState((prevState) => ({ options: prevState.options.concat(newOption) }))
  }
  handleClearSelectedOption = () => {
    this.setState(() => ({selectedOption: undefined}))
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)

      // Set state only if there is any options
      if (options) {
        this.setState(() => ({ options }))
        console.log('fetching data')
      }
    } catch (e) {
      // If json data is not valid, do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // Only save if options array changes
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
      console.log('saving data');
    }
  }
  // Fires just before component goes away (user switches a page)
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    // Set up props for Header component
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer'
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    )
  }
}

// IndecisionApp.defaultProps = {
//   options: []
// }


// Stateless Functional Component
// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// }
