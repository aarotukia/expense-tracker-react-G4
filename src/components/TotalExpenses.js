import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
const TotalExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    /* map through amounts and add them up to show total expenses*/
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h4> Total Expenses </h4>
      <h1> {total}€</h1> 
    </div>
  )
}

export default TotalExpenses
