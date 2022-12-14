import React, {useState} from 'react'

const AddExpense = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState();
  return (
    <>
       <h3>Add fueling information</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Fueling information</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="the distance driven with the refueling in kilometers" />
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="name of the car that was refueled" />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
       </label>
          <input type="number"value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Quantity of fueling in liters.." />
          <input type="number"value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Price of the fueling...." />
        </div>
        <button className="btn">Add expenses</button>
      </form>
    </>
  )
}

export default AddExpense
