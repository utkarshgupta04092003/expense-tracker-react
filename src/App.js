import './App.css';
import TotalAmount from './components/TotalAmount';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';
import NewTransaction from './components/NewTransaction';

import { TransactionContextProvider } from './utils/TransactionContext';



function App() {

  return (
    <div className='border border-gray-500 flex flex-col justify-center   md:w-1/3 w-1/2 h-full pt-5 m-auto'>
        <TransactionContextProvider>
        <h1 className='border border-gray-900 text-2xl font-bold text-center'>Expense Tracker</h1>


          <TotalAmount/>
          <IncomeExpense/>
          <History/>
          <NewTransaction/>

        </TransactionContextProvider>

    </div>
  );
}

export default App;
