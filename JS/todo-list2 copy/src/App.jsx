import React, {useState} from 'react'
import List from './components/List'
import Form from './components/Form'
import './App.css'

const App = () => {

  const [liftedState, setLiftedState] = useState([])

  const addItem = (newItem) => {
    setLiftedState(prevLiftedState => [...prevLiftedState, newItem]);
  }

  const deleteItem = (index) => {
    setLiftedState(liftedState.filter((item, idx) => idx !== index));
};

  const updateItem = (updatedItems) => {
    setLiftedState(updatedItems);
  }

  return (
    <div className="app-container">
      <Form stateUpdater={addItem}/>
      <List updateState={updateItem} liftedState={liftedState} deleteItem={deleteItem}/>
    </div>
  )
}
export default App
