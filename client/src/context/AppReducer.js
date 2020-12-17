const AppReducer = (state, action) => {
    switch (action.type) {
        case "AUTH_START":
            return {
                ...state,
                loading: true
            }
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }

        default:
            return state;
    }
}

export default AppReducer;