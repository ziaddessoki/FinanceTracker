import React from 'react'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'
import History from './History'
import NewTransactions from './NewTransactions'


export const Account = () => {
    return (
        <div>
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