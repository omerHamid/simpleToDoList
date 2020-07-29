import React, {useContext} from 'react'
import {AllContext, AllDispatch} from './App'

function ListContents() {
  const list=useContext(AllContext);
  const dispatch=useContext(AllDispatch);
  const toDos=list.map(item => <li key={item.id}><label>{item.toDo}</label> <i onClick={() => dispatch({type: "REMOVE", id: item.id})}><img src="https://img.icons8.com/material-rounded/16/000000/checkmark.png"/></i></li>)
  return (
    <div>
      <ul>
        {toDos}
      </ul>
    </div>
  )
}

export default ListContents
