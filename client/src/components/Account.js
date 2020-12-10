import React from 'react'
import Header from './Header'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'
import History from './History'

export const Account = () => {
    return (
        <div>
            <Header/>
            <Balance/>
            <IncomeExpense/>
            <History/>
        </div>
    )
}

export default Account;