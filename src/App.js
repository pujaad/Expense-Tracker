import React, { useState, useEffect } from 'react';
import WalletBalance from "./components/WalletBalance";
import Expenses from "./Expenses";
import ExpenseList from "./components/ExpenseList";
import ExpensePieChart from './PieChart';
// import ExpenseBarChart from "./ExpenseBar"

function App() {
  const [walletBalance, setWalletBalance] = useState(5000);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const savedBalance = localStorage.getItem("walletBalance");
    if (savedBalance) {
      setWalletBalance(parseFloat(savedBalance));
    }
    const savedExpenses = localStorage.getItem("expenses");
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const updateBalance = () => {
    const balance = parseFloat(localStorage.getItem("walletBalance")) || 5000;
    setWalletBalance(balance);
  };

  const addExpense = (expense) => {
    if (expense.price > walletBalance) {
      alert("Insufficient balance!");
      return false;
    }
    const newBalance = walletBalance - expense.price;
    setWalletBalance(newBalance);
    localStorage.setItem("walletBalance", newBalance.toString());
    setExpenses([...expenses, expense]);
    return true;
  };
  const updateExpense = (updatedExpense) => {
    const updatedExpenses = expenses.map(expense =>
      expense.id === updatedExpense.id ? updatedExpense : expense
    );
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses",JSON.stringify(updatedExpense))

  };
  
  return (
    <>
      <WalletBalance balance={walletBalance} updateBalance={updateBalance} />
      <Expenses 
        expenses={expenses} 
        setExpenses={setExpenses} 
        addExpense={addExpense} 
        walletBalance={walletBalance} 
      />
      <ExpenseList expenses={expenses} updateExpenses={updateExpense} />
      <ExpensePieChart expenses={expenses}/>
      {/* <ExpenseBarChart expenses={expenses}/> */}
    </>
  );
}

export default App;