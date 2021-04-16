import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
import axios from "axios"
import { getTransactions as test, deleteTransaction as test2 } from './actions/transactions.js'

//initial State
const initialState = {
    user: {
        userId: null,
        fbId: null,
        name: "",
        email: "",
        token: null,
        error: null,
        savedStocks: [],
    },
    stock: {
        top10: ["tsla", "ibm", "appl", "msft", "penn"],
        crypto: ["btc", "eth", "ada", "uni", "doge", "bnb"]
    },
    transactions: [],
    loading: false,
    isAuthenticated: false,
};

//create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    //Auth Actions
    //Reset error and start loading
    const authStart = () => {
        return {
            type: "AUTH_START"
        }
    }
    //add token and user ID to state
    const authSuccess = (token, fbId) => {
        return {
            type: "AUTH_SUCCESS",
            token: token,
            fbId: fbId,

        }
    }

    const authFail = (error) => {
        return {
            type: "AUTH_FAIL",
            error: error
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationDate');
        localStorage.removeItem('fbId');
        dispatch({
            type: "AUTH_LOGOUT"
        })
    }

    const checkAuthTimeout = (expirationTime) => {
        return dispatch => {
            setTimeout(() => {
                dispatch(logout())
            }, expirationTime * 1000)
        }
    }

    //Sign in or Sign Up
    const auth = (email, password, isSignUp) => {
        dispatch(authStart());

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCBpvurK_316C6cGCx8npHkxYKpq3XLCrM'
        if (!isSignUp) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCBpvurK_316C6cGCx8npHkxYKpq3XLCrM'
        }

        axios.post(url, authData)
            .then(res => {
                // console.log(res);
                //we doing the local storage so it wont sing up with refreshing the page
                localStorage.setItem('token', res.data.idToken);
                const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('fbId', res.data.localId);
                dispatch(authSuccess(res.data.idToken, res.data.localId));
                dispatch(checkAuthTimeout(res.data.expiresIn));
                // initialState.user.fbId = res.data.localId
            })
            .catch(err => {
                // console.log(err.response.data.error);
                dispatch(authFail(err.response.data.error.message))
            }

            )
    }

    //get user from DB
    const getUserDB = async (id) => {
        const res = await axios.get(`/api/v1/user/${id}`)
        try {
            dispatch(authStart());

            dispatch({
                type: "GET_USER",
                payload: res.data.data
            })

            // setTimeout(() => {

            //     dispatch({
            //         type: "GET_USER",
            //         payload: res.data.data
            //     })
            // }, 100)
        } catch (err) {
            console.log(err)


            dispatch({
                type: "AUTH_FAIL",
                error: err.response.data.error
            })


        }
    }

    //add user to DB
    const addUserDB = async (newUser) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const res = await axios.post("/api/v1/user", newUser, config)


            dispatch({
                type: "ADD_USER",
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: "AUTH_FAIL",
                error: err.response.data.error
            })
        }
    }

    //delete user from DB
    const deleteUserDB = async (id) => {
        try {
            const res = await axios.delete(`/api/v1/user/${id}`)

            dispatch({
                type: "DELETE_USER",
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: "AUTH_FAIL",
                error: err.response.data.error
            })
        }
    };
    // const getTransactions = test();
    // Get all user's transaction 
    const getTransactions = async (userId) => {
        try {
            const res = await axios.get(`/api/v1/transactions/${userId}`)

            dispatch({
                type: "GET_TRANSACTIONS",
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: "TRANSACTION_ERROR",
                error: err.response.data.error
            })
        }
    }

    //Transactions actions
    // const deleteTransaction = test2()
    const deleteTransaction = async (userId, id) => {
        try {
            const res = await axios.delete(`/api/v1/transactions/${userId}/${id}`)
            dispatch({
                type: "DELETE_TRANSACTION",
                id: id,
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: "TRANSACTION_ERROR",
                error: err.response.data.error
            })
        }
    };

    const addTransaction = async (userId, transaction) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const res = await axios.post(`api/v1/transactions/${userId}`, transaction, config)
            dispatch({
                type: "ADD_TRANSACTION",
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: "TRANSACTION_ERROR",
                error: err.response.data.error
            })
        }
    }

    const authCheckState = async () => {

        const token = localStorage.getItem('token');

        if (!token) {
            logout()
        }
        else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                logout()
            } else {

                const userId = localStorage.getItem('fbId');
                dispatch(getUserDB(userId))
                console.log(userId)
                dispatch(authSuccess(token, userId));

                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }

        }

    }

    //Look up stock quotes 
    const getStockQuote = async (stock) => { }


    //get stock time series for chart
    //timeSeries = [Daily,Weekly,monthly]
    const getStockTime = async (stock, time) => { }


    //get stock intrada for chart
    //interval = [1,5,15,30,60]min
    //might not use
    const getStockTime = async (stock, interval) => { }

    //get stock company info.
    const getCompanyInfo = async (company) => { }


    //get crypto quote
    //sym = symbol [btc,eth,ada, uni,doge,bnb]
    const getCrypto = async (crypto) => { }

    //get crypto time series
    //timeSeries = [Daily,Weekly,monthly]
    const getCrypto = async (crypto, time) => { }


    return (<GlobalContext.Provider value={{
        user: state.user,
        transactions: state.transactions,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        auth,
        authFail,
        authCheckState,
        logout,
        getUserDB,
        addUserDB,
        deleteUserDB,
        getTransactions,
        deleteTransaction,
        addTransaction,
    }}>
        {children}
    </GlobalContext.Provider>)
}