import React, { useContext } from 'react';
import {  GlobalContextSpesif} from '../context/GlobalState';
import TransactionSpesif, { Transcation } from './TransactionSpesif';


export const ExpenseListSpesif = () => {

  const { transactions } = useContext(GlobalContextSpesif);
  return (
    <>
      <h1>Total by cars</h1>
      <ul className="list">
        {transactions.map(transaction => (<TransactionSpesif key={transaction.id} transaction={transaction} />))}

      </ul>
    </>
  )
  
}

export default ExpenseListSpesif
