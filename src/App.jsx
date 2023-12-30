import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Routes,BrowserRouter as Router,Route,Link } from 'react-router-dom'

const App = () => {
  const[data,setData] = useState([])
  const fetchData = async()=>{
    try{const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    setData(res.data)}
    catch(err){
      console.log('error occured while fetching: ',err)
    }
    
  }
  useEffect(()=>{fetchData()},[])
  

  return (
    <div>
    <h1>APP</h1>
    <ul>
      {data.map((item)=>(
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
    </div>
  )
}

export default App