import React,{createContext, useReducer} from 'react';
import transactionReducer from './TransactionReducer.js';
const transaction=[];

export const GlobalContext = createContext(transaction);
export  const MycontextProvider=({children})=>{
    let [state, dispatch] = useReducer(transactionReducer,transaction);
    function addTransaction(transObj){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload:{
                amount:transObj.amount,
                descr: transObj.descr
        }
    });
        
    }

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload:{
                id
        }
    });
}  
   

    return(
        <GlobalContext.Provider value={
            {
                transaction:state,
                addTransaction,
                deleteTransaction

            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}