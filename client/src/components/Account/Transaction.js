import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction, user } = useContext(GlobalContext)

  const sign = transaction.amount < 0 ? "-" : "+"
  return (

    <li className={transaction.amount < 0 ? "minus" : "plus"} >
      {transaction.text} <h>{sign}${Math.abs(transaction.amount)}</h><button onClick={() => deleteTransaction(user.userId, transaction._id)} className="delete-btn">x</button>
    </li>
  )
}

export default Transaction

