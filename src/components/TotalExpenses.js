import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
const TotalExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    /* map through amounts and add them up to show total expenses*/
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


    /* add up total liters   */
    const totalLiterAmount = transactions.map(transaction => transaction.liters);
    const totalLiters = totalLiterAmount.reduce((acc, item) => (acc += item), 0).toFixed(2);

    /* Calculate average expense per 100 km */
    
    /* tulee tähän */

  return (
    <div>


      <h4> Total Expenses </h4>
      <h1> {total}€</h1> 


      <h4> Total liters </h4>
      <h1> {totalLiters} L</h1>

      <h4> Avg Expenses / 100 kilometers </h4>
      <h1> avg €</h1>



    </div>
    
  )
}

export default TotalExpenses
