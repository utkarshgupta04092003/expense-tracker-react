import { useContext, useState } from "react";
import { TransactionContext } from "../utils/TransactionContext";

function NewTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const { transaction, updateTransaction, setTransaction } = useContext(TransactionContext);


    const AddTransaction = (e) => {
        e.preventDefault();

        if(text == '' || amount == ''){
            alert('Fill all the fields');
            return;
        }

        let id = transaction.length == 0 ? 0 : transaction[0].id + 1;
        const currTrans = {
            id: id,
            text: text,
            amount: amount
        }


        transaction.unshift(currTrans);
        updateTransaction(transaction);

        setText('');
        setAmount('')
    }
    return (


        <div>

            <h3 className="font-bold text-2xl mt-3">Add new transaction</h3>
            <hr />
            <form className="flex flex-col my-2">
                <div className="flex flex-col -2">
                    <label htmlFor="text" className="text-lg font-semibold">Text</label>
                    <input type="text" 
                    placeholder="Enter text..." 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                    className="border border-gray-500 p-1 my-1 rounded"
                    />
                </div>

                <div className="flex flex-col my-2">
                    <label htmlFor="amount" className="text-lg font-semibold">Amount  (negative-expense, positive- income)</label>
                    <input type="number"
                     placeholder="Enter amount..."
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)}
                    className="border border-gray-500 p-1 my-1 rounded"/>
                </div>

                <button type="submit" 
                onClick={AddTransaction}
                className="border border-gray-500 p-1 text-white bg-gray-500 rounded"
                >Add transaction</button>


            </form>
        </div>
    )
}

export default NewTransaction;