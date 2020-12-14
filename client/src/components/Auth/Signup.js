import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    //destructor
    const { name, email, password, password2 } = formData


    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
        // if (password !== password2) {
        //     props.setAlert("Password Don't Match", "danger")
        // } else {
        //     props.register({ name, email, password })
        //create a new user object to be the body
        // const newUser = {
        //     name: name,
        //     email: email,
        //     password: password,
        // }
        // try {
        //     const config = {
        //         headers: {
        //             "content-type": "application/json"
        //         }
        //     }
        //     const body = JSON.stringify(newUser)
        //     const res = await axios.post("/api/users", body, config);
        //     console.log(res.data)
        // } catch (err) {
        //     console.log(err.response.data)
        // }
        // }
    }

    // if (props.isAuthenticated) {
    //     return <Redirect to='/dashboard' />
    // }

    return (
        <div className="signContainer">
            <h1 className="large "><i className="fas fa-user"></i> Sign Up</h1>
            <p className="lead">Create Your Account</p>
            <form onSubmit={e => onSubmit(e)}>

                <input type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={e => onChange(e)}
                // required 
                />


                <input type="email"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={e => onChange(e)}
                // required  
                />
                <small className="form-text"
                >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
                >


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

                <input type="submit" className="btn btn-success" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </div>


    )
}

export default Signup
