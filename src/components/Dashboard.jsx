import React, { useState } from 'react'
import Updatedform from './Updatedform'

const Dashboard = ({notes,setNotes,fetchNotes}) => {
    const [selectID,setselectedID] = useState('Select an ID')
    
  return (
    <div>
        <h2>Edit Notes</h2>
        <label htmlFor="notes">
            Select the Note ID to edit: &nbsp;
            <select value={selectID} onChange={(e)=>setselectedID(e.target.value)} name="idval" id="notes">
                <option>{'Select an ID'}</option>
                {
                    notes.map((note,index)=>
                        <option key={index}>{note.id}</option>
                    )
                }
            </select>
        </label>
        <br></br>
        <br />
        <div>
            {selectID!== 'Select an ID'&&<Updatedform selectID={selectID} notes={notes} setNotes={setNotes} fetchNotes={fetchNotes}/>}
        </div>
    </div>
  )
}

export default Dashboard