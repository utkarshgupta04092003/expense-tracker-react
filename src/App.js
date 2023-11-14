import "./App.css";
import TotalAmount from "./components/TotalAmount";
import IncomeExpense from "./components/IncomeExpense";
import History from "./components/History";
import NewTransaction from "./components/NewTransaction";

import { TransactionContextProvider } from "./utils/TransactionContext";

function App() {
  return (
    <TransactionContextProvider>
      <div className="border border-gray-500 flex flex-col justify-center  h-full  m-auto">
        <h1 className="border border-gray-900 my-5 text-2xl font-bold text-center">
          Expense Tracker
        </h1>

        <div className="flex w-full justify-around border border-gray-500">
          <div className="border border-red-500 w-1/3 text-center">
            <History />
          </div>
          <div className="flex flex-col">
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
