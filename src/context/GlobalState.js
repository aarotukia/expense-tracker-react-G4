import React, {createContext, useReducer} from 'react';
import AppReducer from "./AppReducer"


const initialState = {
    transactions: [
        {id: 1, text: "Mazda", amount: 70},
        {id: 2, text: "Ferrari", amount: 150},
    ]
}


/*  Create context  */
export const GlobalContext = createContext(initialState);


/* provider component  */

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
      {children}  
    </GlobalContext.Provider>);
}