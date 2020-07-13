import React,{useContext} from 'react'
import { GlobalContext} from '../context/Context.js';
export const BalanceSummary = () => {
    let {transaction} = useContext(GlobalContext);
    let income = 0;
    let expense = 0;
   
    transaction.map(val=>{
        val.amount>0? income=income+Number(val.amount) : expense = expense+Number(val.amount);
        return transaction;
    })
    
    return (
        <div className="balanceSummary">
            
               <h3>Income<br/>$ {income} </h3> 
                <h3>Expense<br/>$ {expense} </h3>
            
        </div>
    )
}
