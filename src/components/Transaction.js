import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({transaction}) => {
  const {deleteTransaction} = useContext(GlobalContext);

  return (
    <li className="minus">
         {/*   Display name, cost of refuel and amount of liters fueled */}
          {transaction.text} <span>-{transaction.amount}€ ({transaction.liters} Liters)</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>

        </li> 
  )
}

export default Transaction
