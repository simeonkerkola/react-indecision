class IndecisionApp extends React.Component {
  render() {
    // Set up props for Header component
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer'
    const options = ['Thing one', 'thing two', 'thing three']
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Options  options={options}/>
        <Action />
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
        <button>What should I do?</button>
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
        <p>You have: {options.length} props</p>
        <label>Your options</label>
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


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
