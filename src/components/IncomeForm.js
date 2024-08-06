import {React,useState} from "react";
import Modal from 'react-modal';
Modal.setAppElement('#root');

const IncomeForm=({updateBalance})=>{
  const[income,setIncome]=useState("");
         
        
        const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);
    const handleChange = (e) => {
        setIncome(e.target.value)
    }
    const handleSubmit = () => {
        const amount = parseInt(income);
        if (!isNaN(amount) && amount > 0) {
            const currentBalance = parseInt(localStorage.getItem("walletBalance")) || 5000;
            const newBalance = currentBalance + amount;
            localStorage.setItem("walletBalance", newBalance.toString());
            closeModal();
            setIncome("");
            updateBalance(); 
        } else {
            alert("Please enter a valid income amount.");
        }
    };
    return (
        <>
        <button onClick={openModal}>Add Income</button>
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
                <h2>Add Income</h2>
                <input type="text" name="title" placeholder="Income Amount"  value={income} onChange={handleChange}/>
                <button type="submit" onClick={handleSubmit}> Add Balance</button>
                <button type="button" onClick={closeModal}>Cancel</button>
            </Modal>
            </>
            )
}
export default IncomeForm;