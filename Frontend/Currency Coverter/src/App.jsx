//import React from 'react'
import './App.css';
 
const App = () => {
  return (
    <>
    <form action="">
      <div className='externalDiv'>
        <h2>Currency Converter</h2>
        <div className="">
          <label htmlFor="amount">Enter Amount</label>
          <input type="text" placeholder="Enter Amount to convert"/>
        </div>
        <button>Get Exchange Rate</button>
      </div>
    </form>
    </>
  )
}

export default App