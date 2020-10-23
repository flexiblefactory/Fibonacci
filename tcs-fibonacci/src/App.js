import React from 'react';
import './App.css';
import fibonacci from 'fibonacci-fast';
import isComposite from '@extra-number/is-composite';
const fibs = fibonacci.array(1, 18)

const SATURDAY = 6
const SUNDAY = 7

function isWeekend() {
  const day = new Date().getDay()
  return day === SATURDAY || day === SUNDAY
}

function DisplayInteger({ n }) {
  const numberIsPrime = n.lte(Number.MAX_SAFE_INTEGER) && !isComposite(n)//!isComposite(n)
  const weekend = isWeekend()
  const primeLabel = weekend ? 'wic' : 'tic'
  const compositeLabel = weekend ? 'woe' : 'toe'
  return <div style={{ color: numberIsPrime ? 'blue' : 'green' }}>
    {n.toString()} {numberIsPrime ? primeLabel : compositeLabel}
  </div>
}
function App() {

  const [inputInt, setInputInt] = React.useState(10)
  const userInput = parseInt(inputInt) || 0
  const rangeError = !userInput || userInput <0   || userInput > 2000

  return (
    <div className="App">
      {rangeError&& 'error'}      <input style={{ width: '45px' }} type="text" onChange={e => { setInputInt(e.target.value) }} value={inputInt}></input>
      {userInput}
      <div>{fibs.filter(f=>f.number<=userInput).map(f=><DisplayInteger n={f.number}></DisplayInteger>)}</div>
      
    </div>
  );
}

export default App;
