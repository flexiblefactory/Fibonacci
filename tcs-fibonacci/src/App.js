import React from 'react';
import './App.css';
import fibonacci from 'fibonacci-fast';
import DisplayInteger from './DisplayInteger';

const sequence = []
const PAGE_SIZE = 10
const MAX = 2000//Number.MAX_SAFE_INTEGER


for (let i=0;;i++) {
  const fib=fibonacci.get(i)
  if(fib.number>MAX){
    break;
  }
  else{
    sequence.push(fib)
  }
}


function App() {

  const [inputInt, setInputInt] = React.useState(MAX)
  const [page, setPage] = React.useState(1)

  const userInput = parseInt(inputInt) || 0
  const rangeError = !userInput || userInput < 0 || userInput > MAX
  const fibs = sequence.filter(f => f.number <= userInput)
  const totalPages = Math.ceil(fibs.length / PAGE_SIZE)

  const pageNum = Math.max(1, parseInt(page))
  const skip = (pageNum - 1) * PAGE_SIZE
  const pageError = (!pageNum || pageNum < 0 || pageNum > totalPages)

  return (
    <div className="App">

      {pageError && <div className="error">Please enter a page number up to {totalPages}</div>}
      {rangeError && <div className="error">Please enter an integer up to {MAX}</div>}
      <label>Show fib sequence up to: </label>
      <input style={{ width: '45px' }} type="text" onChange={e => { setInputInt(e.target.value) }} value={inputInt}></input>


      {
        !pageError && !rangeError &&
        <div>
          <h1>Showing fibonacci sequence up to {userInput}</h1>
          <div>
            <div>(page {pageNum} of {totalPages})</div>
          </div>
          <div>{fibs.slice(skip, skip + PAGE_SIZE).map((f,i) => <DisplayInteger key={i} n={f.number}></DisplayInteger>)}</div>
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
