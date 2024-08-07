import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Pagination from './Pagination';

Modal.setAppElement('#root');


const ExpenseList=({expenses,updateExpenses})=>{
    const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);
  const[currentPage,setCurrentPage]=useState(1);
  const itemsPerPage=10;

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
    const totalPage = Math.ceil(expenses.length / itemsPerPage);
    const currentExpenses = expenses.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
  );
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
};

    return(
        <>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <h1>Recent Transactions</h1>
        </div>
        
        {currentExpenses.map(expense => (
    
      <div key={expense.id} style={{ display: "flex", alignItems: "center",gap:"10px",padding:"40px",margin:"20 20 20 20",border:"5px solid black"}}>  
        <p>{expense.title} - ₹{expense.price}</p>
        
        <button onClick={() => openModal(expense)}><FaEdit /></button>
        <button onClick={() => handleDelete(expense.id)}><FaTrash /></button>
        
      </div>
  
  ))}
        <Pagination currentPage={currentPage} totalPage={totalPage} onPageChange={onPageChange}/>
        
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