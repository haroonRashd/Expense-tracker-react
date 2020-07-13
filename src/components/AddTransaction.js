import React,{useState,useContext} from 'react'
import { GlobalContext} from '../context/Context.js';
import '../Mycss.css';
export const AddTransaction = () => {
    
   const {addTransaction} = useContext(GlobalContext);
    let [newDescr, setDescr] = useState("");
    let [newAmount, setAmount] = useState();
    
    const handleAdditon = (event)=>{
        event.preventDefault();
        
        addTransaction({
            amount:newAmount,
            descr:newDescr
        });

    }
    
    return (

        <div>
             

            <h3>Add New Transaction</h3>
            <hr />
            <form className="trasaction-form" onSubmit={handleAdditon}>
                <label htmlFor="newText">Description</label><br />
                
                <input type="text" id="newText" placeholder="Enter the discription" onChange={(e)=>setDescr(e.target.value)} required></input><br />
                <label htmlFor="newAmount">Amount <span className="note">(Positive-Income, Negative-Expense)</span></label><br />
                <input type="text" id="newAmount" placeholder="Enter the amount" onChange={(e)=>setAmount(e.target.value)}required></input><br />
                <input type="submit" value="Add Trasaction"  className="btn" />
            </form>
            
        </div>
    )
    
}
