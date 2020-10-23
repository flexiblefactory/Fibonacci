import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [inputInt, setInputInt] = React.useState(2000)
  const userInput = parseInt(inputInt) || 0
  const rangeError = !userInput || userInput <0 


  return (
    <div className="App">
      {rangeError&& 'error'}      <input style={{ width: '45px' }} type="text" onChange={e => { setInputInt(e.target.value) }} value={inputInt}></input>
      {userInput}
    </div>
  );
}

export default App;
