import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

import Transactions from './Transactions'

const History = () => {
    const context = useContext(GlobalContext);

    console.log(context);

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
