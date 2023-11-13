import { useContext, useState } from "react";
import { TransactionContext } from "../utils/TransactionContext";

function NewTransaction(){
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const [render, setRender] = useState(0);
    const {transaction, updateTransaction, setTransaction} = useContext(TransactionContext);


    const AddTransaction = (e)=>{
        e.preventDefault();
        const currTrans = {
            id: transaction[0].id+1,
            text: text,
            amount: amount
        }

        console.log(currTrans);
        transaction.unshift(currTrans);
        // setTransaction(transaction);
        updateTransaction(transaction);

        // setText('');
        // setAmount('');
        console.log(transaction)
    }
    return(


        <div>

            <h3 className="font-bold text-2xl mt-5">Add new transaction</h3>
            <hr />
            <form className="flex flex-col">
                <div className="flex flex-col">
                    
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..." value={text} onChange={(e)=>setText(e.target.value)}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="amount">Amount <br /> (negative-expense, positive- income)</label>
                    <input type="number" placeholder="Enter amount..." value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                </div>

                <button type="submit" onClick={AddTransaction}>Add transaction</button>


            </form>
        </div>
    )
}

export default NewTransaction;