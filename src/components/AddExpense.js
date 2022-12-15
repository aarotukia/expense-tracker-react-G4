import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddExpense = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const [liters, setLiters] = useState();
  const [distance, setDistance] = useState();
  const { addTransaction } = useContext(GlobalContext);



  const onSubmit = e => {
    e.preventDefault();
  
    const newTransaction = {
      /*   generating random id for new expenses */
      id: Math.floor(Math.random() * 100000000),
  
      text,
      amount: +amount,
      liters: +liters,
      distance: +distance
    }
  
    // Check if the text field is equal to "bike"
    if (newTransaction.text === "Bike") {
      // Set the window.location.href property to the URL of the page you want to navigate to
      window.location.href = "https://www.youtube.com/watch?v=eBGIQ7ZuuiU";
    }
  
    addTransaction(newTransaction);
  }
    return (
      <>
        <h3>Add fueling information</h3>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="text">Fueling information</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="name of the car that was refueled (try Bike if you want easter egg :D)" />


          </div>
          <div className="form-control">
            <label htmlFor="amount"
            >Amount <br />
            </label>

            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Price of the fueling/chargin...." />
            <input type="number" value={liters} onChange={(e) => setLiters(e.target.value)} placeholder="Quantity of fueling in liters.. (Empty if electric)" />
            <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="Distance driven with the refueling in kilometers" />


          </div>
          <button className="btn">Add refueling expense</button>
        </form>
      </>
    )
  }

  export default AddExpense
