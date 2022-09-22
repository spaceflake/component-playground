import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Select from './components/select/Select'

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
    </div>
  )
}

export default App
