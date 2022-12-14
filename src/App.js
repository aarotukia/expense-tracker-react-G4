import './App.css';
import Header from './components/Header';
import TotalExpenses from './components/TotalExpenses';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';

import { GlobalProvider } from "./context/GlobalState";
import TotalExpensesSpesif from './components/TotalExpensesSpesif';
import ExpenseListSpesif from './components/ExpenseListSpesif';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <br></br>
      <div> <AddExpense /></div>
      <div className="container">
       
        <div className="left-side">
          <TotalExpenses />
          <ExpenseList />
        </div>
        <div className="right-side">
          <ExpenseListSpesif />
        </div>
      </div>


    </GlobalProvider>
  );
}

export default App;

