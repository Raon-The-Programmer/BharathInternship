import React, { useState } from 'react'

const Create = () => {
  const [createData,setcreateData] = useState()
  const handleSubmit=(e)=>{
      e.preventDefault()

  }
  return (
  <div>
    <form action="submit" >
      <div>
      <label htmlFor="name"> Name: &nbsp;&nbsp;
        <input type="text" placeholder='Enter your name.' />
      </label></div>
      <div>
      <label htmlFor="username"> Username: &nbsp;&nbsp;
        <input type="text" placeholder='Username..' />
      </label></div>
      <div>
      <label htmlFor="email"> Email: &nbsp;&nbsp;
        <input type="text" placeholder='Email..' />
      </label></div>
      <button action='submit' onClick={handleSubmit}>Create</button>
    </form>
    {}
  </div>
  )
}

export default Create;