import React, { useContext, useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import { GlobalContext } from '../../context/GlobalState';

const Login = () => {
    const { auth, getUserDB, isAuthenticated } = useContext(GlobalContext)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    // destructor
    const { email, password } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        auth(email, password, false);
        setTimeout(check, 100);
        // getUserDB(localStorage.getItem("fbId"))
    };

    // check Firebase return and Firebase ID save to localStorage to add user Info to DB
    const check = () => {
        if (localStorage.getItem('fbId') == null) {
            setTimeout(check, 0);
        } else {
            let fbId = localStorage.getItem("fbId")
            getUserDB(fbId)
        }
    }




    //Redirect if logged in
    if (isAuthenticated) {
        return <Redirect to="/account" />;
    }
    return (
        <div className="signContainer">
            <h1>
                <i className="fas fa-user"></i> Sign In
      </h1>
            <br />
            {/* <p className="lead">
        <i className="fas fa-user"></i>Log In
      </p> */}
            <form onSubmit={(e) => onSubmit(e)}>

                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    minLength="6"
                    value={password}
                    onChange={(e) => onChange(e)}
                />

                <input type="submit" className="btn btn-success loginBtn" value="Log In" />
            </form>
            <p className="my-1">
                Don't have an account?
                <Link to="/signup"> Sign Up</Link>
            </p>
        </div>
    )
}

export default Login
