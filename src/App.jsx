import { GlobalProvider } from './context/GlobalState';
import './App.css';

import Balance from './components/Balance';
import ManagerForm from './components/ManagerForm';
import TransactionsList from './components/transaction/TransactionsList';
import IncomeExpense from './components/transaction/IncomeExpenses';
import ManagerChart from './components/transaction/ManagerChart';

function App() {
  return (
    <GlobalProvider>
      <section className="flex justify-center items-center bg-zinc-900 text-white font-poppins h-screen">
        <div className="flex justify-center items-center sm:justify-between sm:items-start flex-col sm:flex-row bg-zinc-700 m-[30px] py-[30px] px-[30px] rounded-[10px] w-[700px]">
          <div className="flex justify-start items-between flex-col w-full mr-0 sm:mr-[30px]">
            <header>
              <h1 className="bg-gradient-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text text-[30px] font-bold leading-[60px] mb-[20px]">
                Finance Manager
              </h1>
            </header>

            <IncomeExpense />
            <Balance />
            <ManagerForm />
          </div>

          <div className="flex flex-col w-full">
            <ManagerChart />
            <TransactionsList />
          </div>
        </div>
      </section>
    </GlobalProvider>
  );
}

export default App;
