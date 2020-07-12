import React,{useContext} from 'react';
import { GlobalContext} from '../context/Context.js';
import '../Mycss.css';
export const TrasactionHistory = () => {
const {transaction} = useContext(GlobalContext);
const {deleteTransaction} = useContext(GlobalContext);
    return(
        <div className="list">
            <ul >
                {transaction.map((val,ind)=>{
                    
                    return(
                        
                         <li  key = {ind} className={val.amount>0? "plus": "minus"}><span>{val.descr}</span> 
                         <span>{val.amount}</span><button className="delete-btn" onClick={()=>deleteTransaction(ind)} >x</button ></li>);
                })}
                
            </ul>
            
        </div>
    );
}
