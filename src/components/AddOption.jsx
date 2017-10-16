import React from 'react'

export default class AddOption extends React.Component {
  state = {
    error: undefined // Using babel-plugin-transform-class-properties, no need for constructor and this.state
  }
  handleAddOption = (e) => {
    e.preventDefault()
    console.log('testing');
    const newOption = e.target.elements.newOption.value.trim()
    const error = this.props.handleAddOption(newOption)

    this.setState(() => ({ error }))

    // If no error, whipe the input
    if(!error) e.target.elements.newOption.value = ''
  }
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="newOption"/>
          <button className="button">Add Option</button>
        </form>
      </div>
    )
  }
}
