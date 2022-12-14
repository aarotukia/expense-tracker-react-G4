import './App.css';
import Header  from './components/Header';
import TotalExpenses  from './components/TotalExpenses';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';

import { GlobalProvider} from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
     <Header />
     <div className="container">
       <TotalExpenses />
       <ExpenseList />
       <AddExpense />
       
       </div>
   
   
    </GlobalProvider>
  );
}

export default App;
