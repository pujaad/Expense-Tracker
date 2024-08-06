
import React from "react";
import ExpenseForm from "./components/ExpenseForm"

const Expenses = ({ expenses, setExpenses, addExpense, walletBalance }) => {
  const totalExpense = expenses.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <div style={{height:"100px",width:"250px",border:"4px solid black", textAlign:"center",fontSize:"10px"}}>
      <h1>Total Expenses: ${totalExpense}</h1>
      <ExpenseForm addExpense={addExpense} walletBalance={walletBalance} />
      
    </div>
  );
};

export default Expenses;