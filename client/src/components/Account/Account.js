import React from 'react'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'
import History from './History'
import NewTransactions from './NewTransactions'


export const Account = () => {
    return (

        <div className="accContainer">
            <Balance />
            <IncomeExpense />
            <NewTransactions />
            <History />

        </div>

    )
}

export default Account;