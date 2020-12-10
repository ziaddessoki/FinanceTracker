import React from 'react'
import Header from './Header'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'
import History from './History'
import NewTransactions from './NewTransactions'

export const Account = () => {
    return (
        <div>
            <Header/>
            <Balance/>
            <IncomeExpense/>
            <History/>
            <NewTransactions/>
        </div>
    )
}

export default Account;