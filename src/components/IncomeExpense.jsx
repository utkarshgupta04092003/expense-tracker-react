import { useContext, useState, useEffect } from "react";
import { TransactionContext } from "../utils/TransactionContext";

function IncomeExpense(){
    
    const {transaction, setTransaction, updateTransaction} = useContext(TransactionContext);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    useEffect(() => {
        let inc = 0;
        let exp = 0;

        for (let i = 0; i < transaction.length; i++) {
            let amt = parseInt(transaction[i].amount);
            if (amt < 0) exp += amt;
            else inc += amt;
        }

        setIncome(inc);
        setExpense(exp);
    }, [transaction]);


    return (
        <div className="flex justify-around border border-green-800">
            <div className="income flex flex-col">
                <h2>INCOME</h2>
                <p>${income}.00</p>
            </div>

            <div className="expense flex flex-col">
                <h2>EXPENSE</h2>
                <p>${expense}.00</p>
            </div>

            


        </div>
    )
}
export default IncomeExpense;