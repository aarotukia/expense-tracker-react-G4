import React from 'react'

const ExpenseList = () => {
  return (
    <>
        <h3>History</h3>
      <ul id="list" class="list">
      <li class="minus">
          Rahee <span>-400€</span><button class="delete-btn">x</button>

        </li> 
      </ul>
    </>
  )
}

export default ExpenseList
