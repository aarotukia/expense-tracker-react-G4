import React, { useContext } from 'react'
import { GlobalContextSpesif } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContextSpesif);
  const { transactions } = useContext(GlobalContextSpesif);


  /* map through amounts and add them up to show total expenses*/
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  /* filter out transactions with SpesifText */
  const transactionsWithSpesifText = transactions.filter(transaction => transaction.text === "asd");

  /* filter out transactions with empty liters */
  const transactionsWithLiters = transactions.filter(transaction => transaction.liters);


  /* add up total liters */
  const totalLiterAmount = transactionsWithLiters.map(transaction => transaction.liters);
  const totalLiters = totalLiterAmount.reduce((acc, item) => (acc += item), 0).toFixed(2);


  /* Calculate average expense per 100 km */
  const totalDistanceAmount = transactions.map(transaction => transaction.distance);
  const totalDistance = totalDistanceAmount.reduce((acc, item) => (acc += item), 0).toFixed(2);



  const totalAmount = transactions.map(transaction => transaction.amount);
  const totalEuroAmount = totalAmount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const averageExpenses = (totalEuroAmount / totalDistance).toFixed(2);

  /* Calculate average consumption per 100 km */
  const averageConsumption = (totalLiters / totalDistance).toFixed(2);

  return (
    <li className="minus">

      {/* check if the transaction has a "liters" property */}
      {transaction.text ? (
        // if it has a "SpesifText" property
        <span>{"pissa"}</span>
      ) : (
        // if it doesn't have a "SpesifText" property
        <span>{"kakka"}</span>
      )}
      <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>

  )
}

export default Transaction