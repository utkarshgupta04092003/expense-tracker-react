import { useContext } from "react";
import { TransactionContext } from "../utils/TransactionContext";

function SingleHistory({trans}){
    return(
        <div className="flex justify-around">
            <div>
                {trans.text}
                </div>
            <div>
                {trans.amount}
            </div>
        </div>
    )


}
function History() {

    const {transaction, updateTransaction} = useContext(TransactionContext);
    return (

        <div>
            <h1 className="font-bold text-2xl">History</h1>
            <hr />
           { transaction.map((trans)=>(

                <SingleHistory trans = {trans} key={trans.id}/>
            ))}
        </div>


    )
}
export default History;