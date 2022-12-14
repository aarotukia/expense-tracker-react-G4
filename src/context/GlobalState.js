import React, {createContext, useReducer} from 'react';
import AppReducer from "./AppReducer";


const initialState = {
    transactions: [
        {id: 1, text: "Mazda", amount: 70, liters: 40, distance: 105},
        {id: 2, text: "Ferrari", amount: 150, liters: 30, distance: 90},
        {id: 3, text: "Honda", amount: 45, liters: 25, distance: 92},
    ]
}


/*  Create context  */
export const GlobalContext = createContext(initialState);


/* provider component  */



export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    /* ACTIONS */
function deleteTransaction(id) {
    dispatch({
        type: "DELETE_TRANSACTION",
        payload: id
    });
}
    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });

}
    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
      {children}  
    </GlobalContext.Provider>);
}
