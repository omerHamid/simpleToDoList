import React, {useContext} from 'react'
import {AllContext} from './App'


function Header() {
  const list=useContext(AllContext);
  return (
    <div className="header">
      <h1>Remind Me</h1>
      <h4>{list.length} things left to do..</h4>
    </div>
  )
}

export default Header
