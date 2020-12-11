import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

import Transaction from './Transaction'

const History = () => {
    const {transactions} = useContext(GlobalContext);

    console.log(transactions)

    return (
        <div>
             <h3>History</h3>
             <ul className="list">
               {transactions.map(transaction=>(<Transaction  key={transaction.id} transaction={transaction}/>))} 
             </ul>
        </div>
    )
}

export default History;
