import axios from "axios"
// Get all user's transaction 
export const getTransactions = (userId) => async (dispatch) => {
    try {
        console.log("still hitting")
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
export const deleteTransaction = (userId, id) => async (dispatch) => {
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

export const addTransaction = (userId, transaction) => async (dispatch) => {
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