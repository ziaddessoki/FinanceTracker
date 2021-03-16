import React, { useContext } from 'react'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'
import History from './History'
import NewTransactions from './NewTransactions'
import { GlobalContext } from '../../context/GlobalState';
import { Redirect } from 'react-router-dom'
import { Fragment } from 'react'


export const Account = () => {

    const { isAuthenticated, loading } = useContext(GlobalContext)

    return (
        <Fragment>
            { !isAuthenticated && !loading ? <Redirect to="/login" /> : null}
            <div className="accContainer">
                <Balance />
                <IncomeExpense />
                <NewTransactions />
                <History />

            </div>
        </Fragment>
    )
}

export default Account;