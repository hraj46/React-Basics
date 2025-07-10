import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)


  // let counter = 5;

  function addValue(){
    // console.log(counter+1)
    // counter = counter + 1
    setCounter(counter + 1)
  }
  function removeValue(){
    setCounter(counter - 1)
  }

  return (
   <>
    <h1>Counter App</h1>
    <h2>Couter value: {counter}</h2>

    <button
      onClick={addValue}
    >Add Value: {counter}</button>
    
    <br />
    <button
      onClick={removeValue}
    >Remove Value: {counter}</button>

    {counter}
   </>
  )
}

export default App
