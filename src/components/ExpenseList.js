import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaEdit, FaTrash } from 'react-icons/fa';


Modal.setAppElement('#root');


const ExpenseList=({expenses,updateExpenses})=>{
    const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);

    const openModal = (expense) => {
        setEditingExpense({...expense});
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
        setEditingExpense(null);
      };
      const handleChange=(e)=>{
       const {name,value}=e.target;
       setEditingExpense(prev => ({ ...prev, [name]: value }));
      }
      const handleEdit = (event) => {
        event.preventDefault();
        updateExpenses(editingExpense);

        closeModal();
    };

    const handleDelete = (id) => {
       
        updateExpenses(expenses.filter(expense => expense.id !== id));
    };
    return(
        <>
        <h1>Recent Transactions</h1>
        <ul>
        {expenses.map(expense=>(
          <li key = {expense.id}>
            {expense.title} - ₹{expense.price}-{expense.date}
            <button onClick={() => openModal(expense)}><FaEdit /></button>
             <button onClick={() => handleDelete(expense.id)}><FaTrash /></button>
          </li>
        ))}
        </ul>
        <Modal 
        isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Edit Expense"
            >
                <h2>Edit Expense</h2>
                {editingExpense && (
          <form onSubmit={handleEdit}>
            <h2>Edit Expense</h2>
            <input type="text" name="title" value={editingExpense.title} onChange={handleChange} />
            <input type="number" name="price" value={editingExpense.price} onChange={handleChange} />
            <input type="text" name="category" value={editingExpense.category} onChange={handleChange} />
            <input type="date" name="date" value={editingExpense.date} onChange={handleChange} />
            <button type="submit">Save Changes</button>
            <button type="button" onClick={closeModal}>Cancel</button>
          </form>
        )}
                

        </Modal>
        </>
    )
}
export default ExpenseList;