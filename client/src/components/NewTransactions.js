import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';


const NewTransactions = () => {
  const [text, setText] = useState('')
  let [amount, setAmount] = useState(0)
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: uuidv4(),
      text: text.charAt(0).toUpperCase() + text.slice(1),
      amount: parseFloat(amount)
    }

    addTransaction(newTransaction)
    setText('');
    setAmount(0)
    console.log(newTransaction)
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input type="number" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        {/* <button className="btn">Add transaction</button> */}
        <div className="buttons">
          <button className="btn incomeBtn"><i className="fas fa-plus-circle"></i> Income</button>
          <button className="btn expenseBtn" onClick={() => amount = -amount}><i className="fas fa-minus-circle"></i> Expense</button>
        </div>

      </form>
    </div>
  )
}

export default NewTransactions
