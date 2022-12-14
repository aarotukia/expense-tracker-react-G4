import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  var eLiter = 0;

  return (
    <li className="minus">
      {transaction.text}
      {/* check if the transaction has a "liters" property */}
      {transaction.liters ? (
        // if it has a "liters" property, display the amount and liters
        <span>-{transaction.amount}€ ({transaction.liters} Liters)</span>
      ) : (
        // if it doesn't have a "liters" property, just display the amount
        <span>-{transaction.amount}€ (Electric car)</span>
      )}
      <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  )
}

export default Transaction