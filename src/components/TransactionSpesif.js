import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
  const { transactions } = useContext(GlobalContext);


  const transactionGroups = {};
  const summedText = `${transaction.text}`;


  /* loop through list of added cars and sum all the necessary information if the car name is the same  */
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

      <h4> Total liters used with {summedText}</h4>
      <h1> {summedLiters} L</h1>

      <h4> Summed distance driven with {summedText}</h4>
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