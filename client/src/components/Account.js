import React from 'react'
import Header from './Header'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'

export const Account = () => {
    return (
        <div>
            <Header/>
            <Balance/>
            <IncomeExpense/>
        </div>
    )
}

export default Account;