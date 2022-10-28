import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Select from './components/select/Select'
import Add from './components/add/Add'

function App() {
  const options = [
    { label: 'First', value: 1 },
    { label: 'Second', value: 2 },
  ]

  return (
    <div className="App">
      <h1>Component Playground</h1>
      <h2>Select Component</h2>
      <Select options={options} />
      <br />
      <h2>List with adding and removing</h2>
      <Add />
      <br />
      <h2>Deck of cards</h2>
    </div>
  )
}

export default App
