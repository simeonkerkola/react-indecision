class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: 0
    }
  }
  handleAddOne() {
    // allows to manipulate the state object, re-renders automaticaly
    this.setState((prevState) => { // prevState can access to the current state values (this.state)
      return {
        count: prevState.count + 1
      }
    })
    // old way of updating the state, can't acceess the prevState values
    // this.setState({
    //   count: 0
    // })
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'))

// let count = 0
//
// const addOne = () => {
//   count++
//   renderCounterApp()
// }
//
// const minusOne = () => {
//   count--
//   renderCounterApp()
// }
// const reset = () => {
//   count = 0
//   renderCounterApp()
// }
//
// const appRoot = document.getElementById('app')
// const someId = 'myId'
//
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button id={someId} className="button" onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   )
//   ReactDOM.render(templateTwo, appRoot)
// }
//
// renderCounterApp()
