import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import TransactionSpesif from './TransactionSpesif';

export const ExpenseListSpesif = () => {
  const { transactions } = useContext(GlobalContext);

  // Remove duplicates from the transactions array
  const transactionsWithoutDuplicates = transactions.filter(
    transaction => transactions.indexOf(transaction) === 0
  );

  // Group transactions by their text values
  const groupedTransactions = transactionsWithoutDuplicates.reduce((acc, transaction) => {
    if (acc[transaction.text]) {
      acc[transaction.text].push(transaction);
    } else {
      acc[transaction.text] = [transaction];
    }
    return acc;
  }, {});

  return (
    <>
      <h1>Total by specific cars</h1>
      <br></br>
      {Object.entries(groupedTransactions).map(([text, transactions]) => (
        <>
          <h2>{text}</h2>
          <ul>
            {transactions.map(transaction => (
              <TransactionSpesif key={transaction.id} transaction={transaction} />
            ))}
          </ul>
        </>
      ))}
    </>
  );
};

export default ExpenseListSpesif;
