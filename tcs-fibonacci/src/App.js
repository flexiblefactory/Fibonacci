import React from 'react';
import './App.css';
import fibonacci from 'fibonacci-fast';
import isComposite from '@extra-number/is-composite';
const sequence = fibonacci.array(1, 18)
const PAGE_SIZE = 10

const SATURDAY = 6
const SUNDAY = 7

function isWeekend() {
  const day = new Date().getDay()
  return day === SATURDAY || day === SUNDAY
}

function DisplayInteger({ n }) {
  const numberIsPrime = !isComposite(n)
  const weekend = isWeekend()
  const primeLabel = weekend ? 'wic' : 'tic'
  const compositeLabel = weekend ? 'woe' : 'toe'
  return <div style={{ color: numberIsPrime ? 'blue' : 'green' }}>
    {n.toString()} {numberIsPrime ? primeLabel : compositeLabel}
  </div>
}
function App() {

  const [inputInt, setInputInt] = React.useState(2000)
  const [page, setPage] = React.useState(1)

  const userInput = parseInt(inputInt) || 0
  const rangeError = !userInput || userInput < 0 || userInput > 2000
  const fibs = sequence.filter(f => f.number <= userInput)
  const totalPages = Math.ceil(fibs.length / PAGE_SIZE)

  const pageNum = Math.max(1, parseInt(page))
  const skip = (pageNum - 1) * PAGE_SIZE
  const pageError = (!pageNum || pageNum < 0 || pageNum > totalPages)

  return (
    <div className="App">

      {pageError && <div className="error">Please enter a page number up to {totalPages}</div>}
      {rangeError && <div className="error">Please enter an integer up to 2000</div>}
      <label>Show fib sequence up to: </label>
      <input style={{ width: '45px' }} type="text" onChange={e => { setInputInt(e.target.value) }} value={inputInt}></input>


      {
        !pageError && !rangeError &&
        <div>
          <h1>Showing fibonacci sequence up to {userInput}</h1>
          <div>
            <div>(page {pageNum} of {totalPages})</div>
          </div>
          <div>{fibs.slice(skip, skip + PAGE_SIZE).map(f => <DisplayInteger n={f.number}></DisplayInteger>)}</div>
          <div>

            {pageNum !== 1 && <button onClick={() => setPage(pageNum - 1)}>previous page</button>}
            {pageNum !== totalPages && <button onClick={() => setPage(pageNum + 1)}>next page</button>}
          </div>

        </div>
      }
      <div>
        <label>page</label><input style={{ width: '45px' }} type="text" onChange={e => { setPage(e.target.value) }} value={page}></input>
      </div>

    </div>
  );
}

export default App;
