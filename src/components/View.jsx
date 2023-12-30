import axios from 'axios'
import React, { useEffect, useState } from 'react'


const View = () => {
    const[data,setData] = useState([])
    const fetchData = async()=>{
      try{const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      setData(res.data)}
      catch(err){
        console.log('error occured while fetching: ',err)
      }
      
    }
    useEffect(()=>{fetchData()},[])
  return (<div>
    <h2>User List</h2>
    <div className='container'>
    {data.map((user) => (
      <div key={user.id} className="user-card">
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    ))}</div>
  </div>)
}

export default View