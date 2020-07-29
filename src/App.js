import React, {useReducer} from 'react';
import Header from './Header';
import AddToList from './AddToList';
import ListContents from './ListContents';
export  const AllContext=React.createContext();
export  const AllDispatch=React.createContext();
const { v4: uuidv4 } = require('uuid');//this(import uuid from 'uuid/v4';) is not working for some reason




const reduceFunc=(list, action) => {
  switch(action.type){
    case 'ADD': return [...list,{id: uuidv4(), toDo: action.toDo}]
    case 'REMOVE': return list.filter((item) => item.id!==action.id);
    default: return list;
  }
}


function App() {
 
  const [list, dispatch]=useReducer(reduceFunc, [{id: 0, toDo: 'note your first to do 😉'}]);

 return (
  <div className="card">
    <AllContext.Provider value={list}>
      <AllDispatch.Provider value={dispatch}>
        <Header  />
        <AddToList />
        <ListContents />
      </AllDispatch.Provider>
    </AllContext.Provider>
  </div>
  );
}

export default App;
