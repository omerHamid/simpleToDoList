import React, {useContext, useState} from 'react'
import {AllDispatch} from './App'


function AddToList() {
  const [newToDo, setToDo]=useState('')
  
  const dispatch=useContext(AllDispatch);
  
  const addBtnHandle=(e) => {
    e.preventDefault();
    setToDo('');
    newToDo.length !== 0 ?
      dispatch({type: "ADD", toDo: newToDo})
       : alert('Enter what do you want to do!');
  }

  return (
    <form onSubmit={addBtnHandle} className="Add">
      <textarea placeholder="Add something.." value={newToDo} onChange={e => setToDo(e.target.value)}></textarea>
      <input type='submit' value="Add"/>
    </form>
  )
}

export default AddToList