import axios from 'axios'
import React, { useState } from 'react'

const Create = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  let userObject = {
    
 name:name,
 email:email,
 phone:phone

  }
  
  const handleSubmit=async(e)=>{
      e.preventDefault()
      try {
        const res = await axios.post('https://jsonplaceholder.typicode.com/users',userObject);
        console.log('User added:', res.data);
        // You can update the user list here if needed.
      }
      catch(err){
        console.log("Error occured while posting: ",err)
      }


  }
  return (
  <div>
    <form action="submit" >
      <div>
      <label htmlFor="name"> Name: &nbsp;&nbsp;
        <input type="text" placeholder='Enter your name.' onChange={e=>setName(e.target.value)}/>
      </label></div>
      <div>
      <label htmlFor="email"> Email: &nbsp;&nbsp;
        <input type="text" placeholder='Email..' onChange={e=>setEmail(e.target.value)} />
      </label></div>
      <div>
      <label htmlFor="phone"> Phone Number: &nbsp;&nbsp;
        <input type="text" placeholder='type..' onChange={e=>setPhone(e.target.value)}/>
      </label></div>
      <button action='submit' onClick={handleSubmit}>Create</button>
    </form>
    {}
  </div>
  )
}

export default Create;