import "./App.css";
import TotalAmount from "./components/TotalAmount";
import IncomeExpense from "./components/IncomeExpense";
import History from "./components/History";
import NewTransaction from "./components/NewTransaction";

import { TransactionContextProvider } from "./utils/TransactionContext";

function App() {
  return (
    <TransactionContextProvider>
      <div className=" flex flex-col justify-center  h-full  m-auto text-gray-700">
        <h1 className="  my-5 text-2xl font-bold text-center">
          Expense Tracker
        </h1>

        <hr />
        <div className="flex w-full justify-around  mt-11">
          <div className="border border-gray-500  rounded w-1/4 text-center">
            <History />
          </div>
          <div className="flex flex-col border border-gray-500 rounded w-1/3 p-2">
 
            <TotalAmount />
            <IncomeExpense />
            <NewTransaction />
 
          </div>
        </div>
      </div>
    </TransactionContextProvider>
  );
}

export default App;
