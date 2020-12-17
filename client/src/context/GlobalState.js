import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
import axios from "axios"

//initial State
const initialState = {
    user: {
        userId: null,
        name: "",
        email: "",
        Password: null,
        token: null,
        error: null,
    },
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ],
    loading: false,
    isAuthenticated: false,
    isSignup: true,

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
    const authSuccess = (token, userId) => {
        return {
            type: "AUTH_SUCCESS",
            token: token,
            userId: userId
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
        localStorage.removeItem('userId');
        return {
            type: "AUTH_LOGOUT"
        }
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
        console.log("hitti again")
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
                console.log(res);
                //we doing the local storage so it wont sing up with refreshing the page
                localStorage.setItem('token', res.data.idToken);
                const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', res.data.localId);
                dispatch(authSuccess(res.data.idToken, res.data.localId))
                dispatch(checkAuthTimeout(res.data.expiresIn))
            })
            .catch(err => {
                console.log(err.response.data.error);
                dispatch(authFail(err.response.data.error.message))
            }

            )






        // return dispatch => {
        //     dispatch(authStart());

        // const authData = {
        //     email: email,
        //     password: password,
        //     returnSecureToken: true
        // }
        // let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCBpvurK_316C6cGCx8npHkxYKpq3XLCrM'
        // if (!isSignUp) {
        //     url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCBpvurK_316C6cGCx8npHkxYKpq3XLCrM'
        // }
        // axios.post(url, authData)
        //     .then(res => {
        //         console.log(res);
        //         //we doing the local storage so it wont sing up with refreshing the page
        //         localStorage.setItem('token', res.data.idToken);
        //         const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
        //         localStorage.setItem('expirationDate', expirationDate);
        //         localStorage.setItem('userId', res.data.localId);
        //         dispatch(authSuccess(res.data.idToken, res.data.localId))
        //         dispatch(checkAuthTimeout(res.data.expiresIn))
        //     })
        //     .catch(err => {
        //         console.log(err.response.data.error.message);
        //         dispatch(authFail(err.response.data.error))
        //     }

        //     )
        // }
    }





    //Transactions actions
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    };

    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }


    return (<GlobalContext.Provider value={{
        loading: state.loading,
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        auth
    }}>
        {children}
    </GlobalContext.Provider>)
}

