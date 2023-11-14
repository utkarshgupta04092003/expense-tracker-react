import React, { createContext, useState } from "react"

const initialState =  [
        {
            id: 2,
            text: "Camera",
            amount: -500
        },
        {
            id: 1,
            text: "Mobile",
            amount: 1500
        }
    ]




export const TransactionContext = createContext();

export const TransactionContextProvider = ({children}) =>{

    const [transaction, setTransaction] = useState([]);
    function updateTransaction(trans){
        console.log('update transaction called');
        setTransaction([...trans]); // Create a new array reference
        console.log('transaction upated successfully , these are the datta');
    }
    return(
        <TransactionContext.Provider value={{transaction, updateTransaction, setTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}