import React, { useState } from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ExpenseForm = ({ addExpense, walletBalance }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    price: "",
    category: ""
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      ...formData,
      price: parseFloat(formData.price),
      
    }
    addExpense(newExpense)
      closeModal();
      setFormData({title:"", date:"", price:"", category:""});
    }
    
   
  

  return (
    <>
      <button onClick={openModal}>Add Expense</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Expense"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
      >
        <h2>Add Expenses</h2>
        <input type="text" name="title" placeholder="title" value={formData.title} onChange={handleChange}/>
        <input type="number" name="price" placeholder="price" value={formData.price} onChange={handleChange}/>
        <input type="date" name="date" placeholder="date" value={formData.date} onChange={handleChange}/>
        <input type="text" name="category" placeholder="category" value={formData.category} onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit}>Add Expense</button>
        <button type="button" onClick={closeModal}>Cancel</button>
      </Modal>
    </>
  );
};

export default ExpenseForm;