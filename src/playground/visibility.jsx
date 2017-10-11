class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Toggle button</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide' : 'Show'}
        </button>
        {this.state.visibility && (<div><p>Hi again!</p></div>)}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
