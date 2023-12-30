import { useEffect, useRef, useState } from 'react'
import './App.css'
import axios from 'axios'
import Dashboard from './components/Dashboard'
import {Link,Route,BrowserRouter as Router,Routes} from 'react-router-dom'

function App(props) {
  const [notes, setNotes] = useState([])
  const[newContent,setNewContent] = useState('')
  const noteRef = useRef(null)
  const [showStatus,setShowStatus] = useState('all')
  const [importantvalue,setImportant] = useState('')
  const fetchNotes= async()=>{
    try{
      const res = await axios.get('http://localhost:3001/notes')
      setNotes(res.data)
    }catch(err){
      console.log('failed to fetch notes;(',err)
    }
  }
  useEffect(()=>{noteRef.current.focus()},[])
  useEffect(()=>{fetchNotes()},[])
  const addNote=(e)=>{
    e.preventDefault();
    let newnote={
      id:Date.now(),
      content:newContent,
      important:importantvalue === 'true'
    }
    //setNotes(notes.concat(newnote))
    axios.post('http://localhost:3001/notes',newnote)
    setNewContent('')
    setImportant('')
    noteRef.current.focus()
    fetchNotes();
  }
 
  const handleChange=(e)=>{
    setShowStatus(e.target.value)
    
  }
 
  const notesFil =(notes,showStatus)=>{
    switch(showStatus){
      case 'all':
      
        return notes
      case 'imp':
        return notes.filter(note=>note.important===true)
      case 'non':
        return notes.filter(note=>note.important===false)
    }
  }
  const filteredNotes = notesFil(notes,showStatus)
  return (
   <div>
    <h1>Notes</h1> 
    <label><input name='filter' type='radio' value='all' onChange={handleChange} checked={showStatus==='all'}/>All</label>
    <label> <input name='filter' type='radio' value='imp' onChange={handleChange}/>Important Notes</label>
    <label> <input name='filter' type='radio' value='non' onChange={handleChange}/>Non Important</label>
    <ol>
      {
        filteredNotes.map((note,index)=>
          <li key={index}>{note.content}</li>
        )
      }
    </ol>
    <hr />
    <h2>Add a new note</h2>
    <form onSubmit={addNote} id='1'><label htmlFor="content">Content: &nbsp;&nbsp;&nbsp;</label>
    <input type="text" placeholder='Type..' id='content' ref={noteRef} value={newContent} onChange={e=>setNewContent(e.target.value)}/>
      <br />
    <br />
    <label htmlFor="important">important: &nbsp;&nbsp;</label>
    <select name="boolean" id="important" onChange={e=>setImportant(e.target.value)} value={importantvalue}>
      <option disabled>--Select--</option>
      <option >true</option>
      <option >false</option>
    </select>
    <br />
    <br />
    <button type='submit'>Add note</button>
    </form>
    <hr />
    <Dashboard notes={notes} setNotes={setNotes} fetchNotes={fetchNotes}/>
   </div>
  
  )
}

export default App
