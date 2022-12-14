import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction, { Transcation } from './Transaction';

export const ExpenseList = () => {

  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}

      </ul>
    </>
  )
}

export default ExpenseList
