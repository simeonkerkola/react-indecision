let visibility = false
const toggleVisibility = () => {
  visibility = !visibility
  render()
}

const render = () => {
  const container = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (<div><p>Hi there</p></div>)}
    </div>
  )
  ReactDOM.render(container, document.getElementById('app'))
}

render()
