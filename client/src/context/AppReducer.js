const AppReducer = (state, action) => {
    switch (action.type) {
        case "AUTH_START":
            return {
                ...state,
                loading: true,
                user: { ...state.user, error: null }
            }
        case "AUTH_SUCCESS":
            return {
                ...state,
                user: { ...state.user, userId: action.payload.userId, token: action.payload.token, error: null },
                loading: false,

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