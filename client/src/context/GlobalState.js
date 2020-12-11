import React, {createContext, useReducer} from 'react';
import AppReducer from  './AppReducer'

//initial State
const initialState ={
    transactions:[
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
    ]
};

//create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer, initialState);
    
    //Actions
    function deleteTransaction(id){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload: id
        })
    };

    function addTransaction(id,text,amount){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload: {id,text,amount}
        })
    }

    return(<GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
        {children}
    </GlobalContext.Provider>)
}

