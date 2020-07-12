import React,{useContext} from 'react'
import { GlobalContext} from '../context/Context.js';

export const Header = () => {
    let {transaction} = useContext(GlobalContext);
    let amount = 0;
    
    transaction.map(val=>{
        amount = amount+Number(val.amount);
        return transaction
    })
    return (
        <div className="header">
            <h2>Expanse Tracker by Haroon</h2>
            <h3>Your balance is $ {amount}</h3>
        </div>
        
    )
}
