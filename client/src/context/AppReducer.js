const AppReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "AUTH_START":
            return {
                ...state,
                loading: true,
                user: { ...state.user, error: null }
            }

        case "AUTH_SUCCESS":
            return {
                ...state,
                user: { ...state.user, fbId: action.fbId, token: action.token, error: null },
                // loading: false,
                isAuthenticated: true,
            }
        case "AUTH_FAIL":
        case "TRANSACTION_ERROR":
            return {
                ...state,
                loading: false,
                user: { ...state.user, error: action.error }
            }
        case "AUTH_LOGOUT":
        case "DELETE_USER":
            return {
                ...state,
                user: {
                    ...state.user, fbId: null,
                    name: null,
                    email: null,
                    userId: null, token: null, error: null,
                },
                transactions: [],
                isAuthenticated: false,
            }
        case "GET_USER":
            return {
                ...state,
                user: {
                    ...state.user,
                    userId: payload._id,
                    fbId: payload.fbId,
                    name: payload.name,
                    email: payload.email
                },
                transactions: [...payload.transactions],
                loading: false
                // transactions: [...state.transactions]
                // transactions: payload.transaction
            }
        case "ADD_USER":
            return {
                ...state,
                user: {
                    ...state.user,
                    userId: payload._id,
                    fbId: payload.fbId,
                    name: payload.name,
                    email: payload.email
                },
                loading: false

            }
        case "GET_TRANSACTIONS":
        case "ADD_TRANSACTION":
            return {
                ...state,
                //not sure if it will duplicate that data, when adding res comes with all transaction
                // transactions: [action.payload, ...state.transactions],
                transactions: action.payload,
                loading: false
            }
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.id),
                loading: false,
            }



        default:
            return state;
    }
}

export default AppReducer;