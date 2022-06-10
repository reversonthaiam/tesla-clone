import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'


function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
      </div>
    </Router>
  )
}

export default App
