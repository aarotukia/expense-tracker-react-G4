import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddExpense = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState();
    const [liters, setLiters] = useState();
    const [distance, setDistance] = useState();
    const { addTransaction } = useContext(GlobalContext);

    var electricCar = false;
    const onSubmit = e => {
        e.preventDefault();
     

        /* if car is electric */

        if (electricCar) {
            const newElectricTransaction = {
                        /*   generating random id for new expenses */
                        id: Math.floor(Math.random() * 100000000),

                        text,
                        amount: +amount,
                        liters,
                        distance
                        
        
                    }
                    addTransaction(newElectricTransaction);
                    electricCar = false;
            }
        
        else {


 
            const newTransaction = {
                /*   generating random id for new expenses */
                id: Math.floor(Math.random() * 100000000),

                text,
                amount: +amount,
                liters: +liters,
                distance: +distance

            }
            addTransaction(newTransaction);
        }
    }
    
    return (
        <>
            <h3>Add fueling information</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Fueling information</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="name of the car that was refueled" />


                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Price of the fueling...." />
                    <input type="number" value={liters} onChange={(e) => setLiters(e.target.value)} placeholder="Quantity of fueling in liters.." />
                    <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="Distance driven with the refueling in kilometers" />


                </div>
                <button className="btn">Add refueling expense</button>
                <button className="btn">Add electric car charging expense</button>
            </form>
        </>
    )
    function changeVal() {
        electricCar = true;
    }
}

export default AddExpense
