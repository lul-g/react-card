import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [form, setForm] = useState({
    'email': '', 
    'password': '',
    'confirm': '',
    'check': false
  })

  function handleSubmit(event) {
    event.preventDefault()
  }
  function handleChange(event) {
    const {name, type, value, checked} = event.target
    setForm(() => {
      return {
        [name]: type==='checkbox' ? checked: value,
      }
    })
  }
  return (
    <div className="App">
      <form action="">
        <input onChange={handleChange} name='email' type="text" placeholder='Email'/>
        <input onChange={handleChange} name='password' type="password" placeholder='password'/>
        <input onChange={handleChange} name='confirm' type="password" placeholder='confirm password'/>
        <div className='div'>
          <input onChange={handleChange} name='check' type="checkbox" id='check' checked={form.check}/> 
          <label htmlFor="check">I want to join the newsletter</label>
        </div>
        <button onClick={handleSubmit}>Sign up</button>
      </form>
    </div>
  )
}

export default App
