import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalContext } from '../context/GlobalState';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated, loading } = useContext(GlobalContext)
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            (isAuthenticated && !loading) ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};


// //to protect private routes such as dashboard
// const PrivateRoute = ({ component: Component, ...rest }) => {
//     const { isAuthenticated } = useContext(GlobalContext)
//     return (
//         <Route
//             {...rest}
//             render={(props) =>
//                 !isAuthenticated ? (
//                     <Redirect to="/login" />
//                 ) : (
//                         <Component {...props} />
//                     )
//             }
//         />
//     )
// };



export default PrivateRoute;