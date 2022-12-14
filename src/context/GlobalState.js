import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer";


const initialState = {
    transactions: [

    ]
    
}
const initialStateSpesif = {
    transactions: [     

    ]
    
}
console.log(initialState)

/*  Create context  */
export const GlobalContext = createContext(initialState);
export const GlobalContextSpesif = createContext(initialStateSpesif);


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
    state.transactions.forEach(transaction => {
        console.log(transaction);
      });
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}
