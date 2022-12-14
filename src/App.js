import './App.css';
import Header  from './components/Header';
import TotalExpenses  from './components/TotalExpenses';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';

function App() {
  return (
    <div>
     <Header />
     <div className="container">
       <TotalExpenses />
       <ExpenseList />
       <AddExpense />
       </div>
 <p> hello testing testing</p>
    </div>
  );
}

export default App;
