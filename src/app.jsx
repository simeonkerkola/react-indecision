class IndecisionApp extends React.Component {
  constructor(props) { // constructor gets called w/ props object (same as this.props in render method)
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: props.options
    }
  }
  handleDeleteOptions() {
    // ({ this is an arrow function returning an object })
    this.setState(() => ({ options: [] }))
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }))
  }
  handlePick() {
    const random = Math.floor(Math.random() * this.state.options.length)
    alert(this.state.options[random])
  }
  handleAddOption(newOption) {
    if (!newOption) return 'Enter valid value to add item'

    // returns the index where found, or -1 if not
    else if (this.state.options.indexOf(newOption) > -1) {
      return 'This option already exists'
    }

    // We don't wanna directly manipulate the previous state
    // arr.concat(arr2) merges 2 arrays, doesn't change the existing array, but returns a new one
    this.setState((prevState) => ({ options: prevState.options.concat(newOption) }))
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
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: ['hi', 'hy']
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    )
  }

  // class Action extends React.Component {
  //   render() {
  //     return (
  //       <div>
  //         <button
  //           onClick={this.props.handlePick}
  //           disabled={!this.props.hasOptions}
  //           >
  //             What should I do?
  //           </button>
  //         </div>
  //       )
  //     }
  //   }

  // Render new tag to each option
  const Options = (props) => {
    const options = props.options
    return (
      <div>
        <p>You have: {options.length} options</p>
        <p>
          <button onClick={props.handleDeleteOptions}>Remove All</button>
        </p>
        <label>Your options: </label>
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

  const Option = (props) => {
    return (
      <div>
        {props.optionText}
        <button
          onClick={(e) => {
            props.handleDeleteOption(props.optionText)
          }}

          >
            remove
          </button>
        </div>
      )
    }

    class AddOption extends React.Component {
      constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
          error: undefined
        }
      }
      handleAddOption(e) {
        e.preventDefault()

        const newOption = e.target.elements.newOption.value.trim()
        const error = this.props.handleAddOption(newOption)

        this.setState(() => ({ error }))
      }
      render() {
        return (
          <div>
            <label>Add new:</label>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
              <input type="text" name="newOption"/>
              <button>Submit</button>
            </form>
          </div>
        )
      }
    }

    // Stateless Functional Component
    // const User = (props) => {
    //   return (
    //     <div>
    //       <p>Name: {props.name}</p>
    //       <p>Age: {props.age}</p>
    //     </div>
    //   )
    // }

    ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
