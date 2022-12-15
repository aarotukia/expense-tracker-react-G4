import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import TransactionSpesif, { Transcation } from './TransactionSpesif';

export const ExpenseListSpesif = () => {
  const { transactions } = useContext(GlobalContext);

  // Remove duplicates from the transactions array
  const transactionsWithoutDuplicates = transactions.filter(
    transaction => transactions.indexOf(transaction) === 0
  );

  return (
    <>
      <h1>Total by specific cars</h1>
      <ul className="list">
        {transactionsWithoutDuplicates.map(transaction => (
          <TransactionSpesif key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default ExpenseListSpesif;
