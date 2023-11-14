import { useContext, useState } from "react";
import { TransactionContext } from "../utils/TransactionContext";

function IncomeExpense(){
    
    const {transaction} = useContext(TransactionContext);

    
    let inc = 0;
    let exp = 0;
    for(let i=0;i<transaction.length;i++){
        let amt = parseInt(transaction[i].amount);
        (amt < 0) ? exp += amt : inc+=amt;
    }
    const [income, setIncome] = useState(inc);
    const [expense, setExpense] = useState(exp);

    // setIncome(inc);
    // setExpense(exp);

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