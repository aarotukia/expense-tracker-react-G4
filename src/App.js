import './App.css';
import Header  from './components/Header';
import TotalExpenses  from './components/TotalExpenses';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';

import { GlobalProvider} from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
    <div>
     <Header />
     <div className="container">
       <TotalExpenses />
       <ExpenseList />
       <AddExpense />
       
       </div>
   
    </div>
    </GlobalProvider>
  );
}

export default App;
