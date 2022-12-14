import React from 'react'

const ExpenseList = () => {
  return (
    <>
        <h3>History</h3>
      <ul className="list">
      <li className="minus">
          Rahee <span>-400€</span><button className="delete-btn">x</button>

        </li> 
      </ul>
    </>
  )
}

export default ExpenseList
