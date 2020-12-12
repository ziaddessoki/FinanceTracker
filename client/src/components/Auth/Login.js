import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {
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
        // props.login(email, password);
    };
    //Redirect if logged in
    // if (props.isAuthenticated) {
    //     return <Redirect to="/account" />;
    // }
    return (
        <Fragment>
            <h1 className="large text-primary">
                <i className="fas fa-user"></i>Log In
      </h1>
            {/* <p className="lead">
        <i className="fas fa-user"></i>Log In
      </p> */}
            <form className="form" onSubmit={(e) => onSubmit(e)}>

                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    minLength="6"
                    value={password}
                    onChange={(e) => onChange(e)}
                />

                <input type="submit" className="btn btn-primary" value="Log In" />
            </form>
            <p className="my-1">
                Don't have an account?
                <Link to="/signup">Sign Up</Link>
            </p>
        </Fragment>
    )
}

export default Login
