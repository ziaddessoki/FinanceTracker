import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction, user } = useContext(GlobalContext)

  const sign = transaction.amount < 0 ? "-" : "+"
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"} >
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(user._id, transaction.id)} className="delete-btn">x</button>
    </li>
  )
}

export default Transaction

