console.log('App.js is running')

const skills = {
  subtitle: 'Hi there!',
  languages: ['node', 'react',],
  levels: ['beginner', 'pro',],
}

const onFormSubmit = (e) => { // <= e = event
  e.preventDefault() // prevents page reaload on submit

  const language = e.target.elements.language.value

  if (language) {
    skills.languages.push(language)
    e.target.elements.language.value = ''
    renderTemplate()
  }
}

const onRemoveAll = () => {
  skills.languages = []
  renderTemplate()
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * skills.languages.length)
  const language = skills.languages[randomNum]
  console.log(language)
}

const appRoot = document.getElementById('app')

const numbers = [1,2,3]

const renderTemplate = () => {
  const template = (
    <div>
      {/* if (subtitle) {<h1>}  */}
      {skills.subtitle && <h1>{skills.subtitle}</h1>}

      {/*  if (lang > 0) { here }; else { no } */}
      {skills.languages.length > 0 ? <p>Heres your languages:</p> : <p>No languages </p>}

      {/* {
        numbers.map(number => <p key={number}>Number: {number}</p>)
      } */}

      <ol>
        {
          skills.languages.map(language => <li key={language}>{language}</li>)
        }
      </ol>
      <p>{skills.languages[0]} level: {skills.levels[1]}</p>

      <button disabled={skills.languages.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="language"/>
        <button>Add Language</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot)
}

renderTemplate()
