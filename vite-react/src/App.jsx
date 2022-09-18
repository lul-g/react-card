import React from 'react'
import './App.css'
import rct_logo from './assets/react.svg'

function Header() {
  return (
    <nav>
        <div className='flex-left flex'>
          <img src={rct_logo} />
          <h3 className='h3'>React Facts</h3>
        </div>
        <div className="flex">React course project-1</div>
    </nav>
  )
}

function Main() {
  return (
    <main>
      <div>
        <h1>Fun Facts About React</h1>
        <ul>
          <li>gibrish gibrish blah blah gibrish</li>
          <li>gibrish gibrish blah blah gibrish</li>
          <li>gibrish gibrish blah blah gibrish</li>
          <li>gibrish gibrish blah blah gibrish</li>
          <li>gibrish gibrish blah blah gibrish</li>
        </ul>
      </div>
    </main>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  )
}

export default App