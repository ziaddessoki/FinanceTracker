import React, { Fragment, useContext } from 'react'
import { Link } from "react-router-dom"
import { Dropdown } from 'react-bootstrap'
import { GlobalContext } from '../context/GlobalState';
import logo from '../assets/logo.png'

export const Header = () => {
    const { logout, isAuthenticated } = useContext(GlobalContext)
    return (
        <Fragment>
            <nav className="toolBar">
                {!isAuthenticated ?
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Log In</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                    </ul> :
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/account">Account</Link></li>
                        <li><Link onClick={() => logout()} to="/">Log out</Link></li>
                    </ul>}


            </nav>


            <br />

            <h2 className="title"><img src={logo} alt="logo" width="50px" height="40px" />Finance Tracker</h2>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdownBtn">
                    <i className="fas fa-bars"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu align="right">
                    {/* add Global state, signup and login will disabler  */}
                    {!isAuthenticated ?
                        <div>
                            <Link className="dropdown-item" to="/">Home</Link>
                            <Link className="dropdown-item" to="/login">Log In</Link>
                            <Link className="dropdown-item" to="/signup">Sign Up</Link>
                        </div> :
                        <div>
                            <Link className="dropdown-item" to="/">Home</Link>
                            <Link className="dropdown-item" to="/account">Account</Link>
                            <Link onClick={() => logout()} className="dropdown-item" to="/">Log out</Link>
                        </div>}



                </Dropdown.Menu>
            </Dropdown>
            <div className="clearfix"></div>
        </Fragment>
    )
}

export default Header;