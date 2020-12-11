import React from 'react'
import Header from '../Header'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'
import History from './History'
import NewTransactions from './NewTransactions'

import { GlobalProvider } from '../../context/GlobalState'

export const Account = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpense />
                <History />
                <NewTransactions />
            </div>
        </div>
    )
}

export default Account;