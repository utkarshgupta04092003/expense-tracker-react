import { useContext, useState, useEffect } from "react";
import { TransactionContext } from "../utils/TransactionContext";

function TotalAmount(){

    const {transaction, setTransaction} = useContext(TransactionContext);
    let total = 0;
    for(let i=0;i<transaction.length;i++){
        total += parseFloat(transaction[i].amount);
    }
    const [amount, setAmount] = useState(total);
    
    return(
        <div className="font-bold text-2xl" >
        
            <h1>Your Balance</h1>
            {/* <p>$1000.00</p> */}
            <p>${amount}.00</p>
        </div>
        
    )
}
export default TotalAmount;