import React from 'react';
import logo from './logo.svg';
import './App.css';
import fibonacci from 'fibonacci-fast';
import isComposite from '@extra-number/is-composite';

function App() {

  const [inputInt, setInputInt] = React.useState(10)
  const userInput = parseInt(inputInt) || 0
  const rangeError = !userInput || userInput <0 

  const fibs = fibonacci.array(0, userInput)
  return (
    <div className="App">
      {rangeError&& 'error'}      <input style={{ width: '45px' }} type="text" onChange={e => { setInputInt(e.target.value) }} value={inputInt}></input>
      {userInput}
      <div>{fibs.map(f=><div>{f.number.toString() + ' '+ (isComposite(f.number) ? 'composite':'prime')}</div>)}</div>
      
    </div>
  );
}

export default App;
