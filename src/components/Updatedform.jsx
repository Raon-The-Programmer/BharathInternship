import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Updatedform = ({selectID,notes,setNotes,fetchNotes}) => {
    const [selectedNote,setselectedNote] = useState(null)
    const [editedContent,seteditedContent] = useState('')
    const [editedImportant,setImportant] = useState('')
    
const handleSubmit=(e)=>{
    e.preventDefault()
    let note = {
        id:selectedNote.id,
        content:editedContent,
        important:editedImportant
    }
    
    axios.put(`http://localhost:3001/notes/${selectedNote.id}`,note)
    fetchNotes()
}
const handleDelete=async(e)=>{
    e.preventDefault()
    try{
        const res = await  axios.delete(`http://localhost:3001/notes/${selectedNote.id}`)
        fetchNotes()

    }catch(err){
        console.log(err)
    }
}


    const fetchNote=async()=>{
        try{
            const res = await axios.get(` http://localhost:3001/notes/${selectID}`)
            if(res.data){
                setselectedNote(res.data)
                setImportant(res.data.important)
                seteditedContent(res.data.content)
            }
            
        }catch(err){
            console.log('error occured:',err)
        }
    }
 useEffect(()=>{
    fetchNote();
 },[selectID])
  return (
    <div><form action='submit'>
            <label htmlFor="submit">Edit you content:&nbsp;&nbsp;
                <input value={editedContent} onChange={e=>seteditedContent(e.target.value)} type="text" />
            </label>
            <br />
            <br />
            <label htmlFor="submit"> Important: &nbsp;&nbsp;
                <select value={editedImportant} onChange={e=>setImportant(e.target.value ==='true')} name="boolean" id="submit">
                    <option defaultChecked>Select</option>
                    <option>true</option>
                    <option>false</option>
                </select>

            </label>
            <br />
        <br />
        <button onClick={handleSubmit}>Update List</button>
        <button style={{marginLeft:'10px'}} onClick={handleDelete}>Delete</button>
        </form>
        
        
        </div>
  )
}

export default Updatedform