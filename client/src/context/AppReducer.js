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
                user: { ...state.user, userId: action.userId, token: action.token, error: null },
                loading: false,
                isAuthenticated: true,
            }
        case "AUTH_FAIL":
            return {
                ...state,
                loading: false,
                user: { ...state.user, error: action.error }
            }
        case "AUTH_LOGOUT":
            return {
                ...state,
                user: { ...state.user, userId: null, token: null, error: null },
                isAuthenticated: false,
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