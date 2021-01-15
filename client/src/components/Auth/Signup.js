import React, { useContext, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState';

const Signup = () => {

    const { auth, addUserDB, isAuthenticated } = useContext(GlobalContext)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        errMessage: false,
    });
    //destructor
    const { name, email, password, password2, errMessage } = formData



    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })


    const onSubmit = async e => {
        e.preventDefault();

        if (password !== password2) {

            setFormData({ ...formData, errMessage: true })

            //     props.setAlert("Password Don't Match", "danger")
        } else {
            // Authenticate with Firebase
            auth(email, password, true);

            // check Firebase return and Firebase ID save to localStorage to add user Info to DB
            const check = () => {
                if (localStorage.getItem('fbId') == null) {
                    setTimeout(check, 0);
                } else {
                    let fbId = localStorage.getItem("fbId")
                    const newUser = {
                        name: name,
                        email: email,
                        fbId: fbId
                    }
                    addUserDB(newUser)
                }
            }

            setTimeout(check, 0);
        }
    }

    if (isAuthenticated) {
        return <Redirect to='/account' />
    }

    return (
        <div className="signContainer">
            <h1><i className="fas fa-user"></i> Sign Up</h1>
            <p>Create Your Account</p>
            <form onSubmit={e => onSubmit(e)}>

                <input type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={e => onChange(e)}
                    required
                />


                <input type="email"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={e => onChange(e)}
                    required
                />
                <br />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    // minLength="6"
                    value={password}
                    onChange={e => onChange(e)}
                />


                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    // minLength="6"
                    value={password2}
                    onChange={e => onChange(e)}
                />

                <p style={{ color: "red", fontWeight: "bold", margin: "0px" }}>
                    {errMessage ? "Passwords Don't Match!" : null}</p>

                <input type="submit" className="btn btn-success" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </div>


    )
}

export default Signup;
