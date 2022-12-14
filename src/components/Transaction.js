import React from 'react'

const Transaction = ({transaction}) => {
  return (
    <li className="minus">
         {/*   Display name, cost of refuel and amount of liters fueled */}
          {transaction.text} <span>-{transaction.amount}€ ({transaction.liters} Liters)</span><button className="delete-btn">x</button>

        </li> 
  )
}

export default Transaction
