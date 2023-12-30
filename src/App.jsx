import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Routes,BrowserRouter as Router,Route,Link } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Create from './components/Create'
import Edit from './components/Edit'
import './App.css'
import View from './components/View'

const App = () => { 
  return (
    <div>
      <Router>
        <div>
          <Link to='/' style={{paddingRight:'15px'}}>Dashboard</Link>
          <Link to='/create' style={{paddingRight:'15px'}}>Create</Link>
          <Link to='/edit' style={{paddingRight:'15px'}}>Update and Delete</Link>
          <Link to='/view' style={{paddingRight:'15px'}}>View</Link>
        </div>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/edit' element={<Edit/>}/>
          <Route path='/view' element={<View/>}/>
        </Routes>
      </Router>
    
    </div>
  )
}

export default App