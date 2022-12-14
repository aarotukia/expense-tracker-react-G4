import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
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

  const averageExpenses = (totalEuroAmount / totalDistance).toFixed(2);

  /* Calculate average consumption per 100 km */
  const averageConsumption = (totalLiters / totalDistance).toFixed(2);


  const transactionGroups = {};
  const summedText = `${transaction.text}`;


  
  for (const transaction of transactions) {
    if (!transactionGroups[transaction.text]){
      transactionGroups[transaction.text] = {
        amountSum: 0,
        litersSum: 0,
        distanceSum: 0,
      };
    }
  

    transactionGroups[transaction.text].amountSum += transaction.amount;
    transactionGroups[transaction.text].litersSum += transaction.liters;
    transactionGroups[transaction.text].distanceSum += transaction.distance;
  }
  

  var summedAmounts = transactionGroups[transaction.text].amountSum;
  var summedLiters =  transactionGroups[transaction.text].litersSum;
  var summedDistance = transactionGroups[transaction.text].distanceSum;

  var AverageSummedExpenses = (summedAmounts / summedDistance*100).toFixed(2)
  var AverageSummedConsumption = (summedLiters / summedDistance*100).toFixed(2)

  



  return (
    <div>

      <h4> Total Expenses by car {summedText}</h4>
      <h1> {summedAmounts}€</h1>

      <h4> Total liters of  {summedText}</h4>
      <h1> {summedLiters} L</h1>

      <h4> Summed distance </h4>
      <h1> {summedDistance} KM</h1>

      <h4> Avg Expenses Euro / 100 kilometers </h4>
      <h1> {AverageSummedExpenses}€</h1>

      <h4> Avg consumption Liter / 100 kilometers </h4>
      <h1> {AverageSummedConsumption} liters</h1>

      <br></br>
      <br></br>
      

    </div>
  )
}

export default Transaction