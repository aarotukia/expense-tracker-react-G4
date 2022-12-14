import React, {useState} from 'react'

const AddExpense = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
  return (
    <>
       <h3>Add fueling information</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
       </label
          >
          <input type="number"value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add expenses</button>
      </form>
    </>
  )
}

export default AddExpense
