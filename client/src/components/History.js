import React from 'react'
import Transactions from './Transactions'

const History = () => {
    return (
        <div>
             <h3>History</h3>
             <ul className="list">
                <Transactions/>
             </ul>
        </div>
    )
}

export default History;
