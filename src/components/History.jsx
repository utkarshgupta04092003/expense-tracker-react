import { useContext } from "react";
import { TransactionContext } from "../utils/TransactionContext";

function SingleHistory({ trans }) {
    return (
        <div className="flex justify-between border border-gray-400 rounded-md  text-lg m-2">
            <div className="ml-3">
                {trans.text}
            </div>
            <div className={parseInt(trans.amount) < 0 ?
                    "flex text-red-500 " :
                    "flex text-green-500 "}>
                ${trans.amount} 
                <div className={parseInt(trans.amount) < 0 ?
                    "bg-red-500 w-[5px] rounded-r-sm ml-5" :
                    "bg-green-500 w-[5px] rounded-r-sm ml-5"} > </div>
            </div>

        </div>
    )


}
function History() {

    const { transaction, updateTransaction } = useContext(TransactionContext);
    return (

        <div>
            <h1 className="font-bold text-2xl p-3">History</h1>
            <hr />
            
            {transaction.length ==0 ?  
            <h1 className="text-xl m-3">No history found</h1> : 
            transaction.map((trans) => (

                <SingleHistory trans={trans} key={trans.id} />
            ))}
        </div>


    )
}
export default History;