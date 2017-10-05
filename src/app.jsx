class IndecisionApp extends React.Component {
  constructor(props) { // constructor gets called w/ props object (same as this.props in render method)
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.state = {
      options: ['Thing one', 'thing two', 'thing three']
    }
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  handlePick() {
    const random = Math.floor(Math.random() * this.state.options.length)
    alert(this.state.options[random])
  }

  render() {
    // Set up props for Header component
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer'
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
          >
            What should I do?
          </button>
        </div>
      )
    }
  }

  // Render new tag to each option

  class Options extends React.Component {
    render() {
      // get props
      const options = this.props.options
      return (
        <div>
          <p>You have: {options.length} options</p>
          <p>
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
          </p>
          <label>Your options: </label>
          {
            options.map(option => <Option key={option} optionText={option} />)
          }

        </div>
      )
    }
  }

  class Option extends React.Component {
    render () {
      return (
        <p>{this.props.optionText}</p>
      )
    }
  }

  class AddOption extends React.Component {
    handleAddOption(e) {
      e.preventDefault()

      const newOption = e.target.elements.newOption.value.trim()
      if (newOption) alert(newOption)
    }
    render() {
      return (
        <div>
          <label>Add new:</label>
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="newOption"/>
            <button>Submit</button>
          </form>
        </div>
      )
    }
  }


  ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
