import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
const TotalExpenses = () => {
  const { transactions } = useContext(GlobalContext);


  /* map through amounts and add them up to show total expenses*/
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

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

  const averageExpenses = (totalEuroAmount / totalDistance*100).toFixed(2);

  /* Calculate average consumption per 100 km */
  const averageConsumption = (totalLiters / totalDistance*100).toFixed(2);




  return (
    <div>
    <h1>Total by ALL cars</h1> <br /> 
      <h4> Total Expenses </h4>
      <h1> {total}€</h1>

      <h4> Total liters </h4>
      <h1> {totalLiters} L</h1>

      <h4> Avg Expenses Euro / 100 kilometers </h4>
      <h1> {averageExpenses} €</h1>

      <h4> Avg consumption Liter / 100 kilometers </h4>
      <h1> {averageConsumption} liters</h1>


    </div>

  )
}

export default TotalExpenses
