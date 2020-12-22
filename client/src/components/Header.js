import React, { Fragment, useContext } from 'react'
import { Link } from "react-router-dom"
import { Dropdown } from 'react-bootstrap'
import { GlobalContext } from '../context/GlobalState';

export const Header = () => {
    const { logout, isAuthenticated } = useContext(GlobalContext)
    return (
        <Fragment>
            <h2 className="title">Finance Tracker</h2>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdownBtn">
                    <i className="fas fa-bars"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu align="right">
                    {/* add Global state, signup and login will disabler  */}
                    {!isAuthenticated ?
                        <div>
                            <Dropdown.Item ><Link to="/">Home</Link></Dropdown.Item>
                            <Dropdown.Item ><Link to="/login">Log In</Link></Dropdown.Item>
                            <Dropdown.Item ><Link to="/signup">Sign Up</Link></Dropdown.Item>
                        </div> :
                        <div>
                            <Dropdown.Item ><Link to="/">Home</Link></Dropdown.Item>
                            <Dropdown.Item ><Link to="/account">Account</Link></Dropdown.Item>
                            <Dropdown.Item ><Link onClick={() => logout()} to="/">Log out</Link></Dropdown.Item>
                        </div>}



                </Dropdown.Menu>
            </Dropdown>
            <div className="clearfix"></div>
        </Fragment>
    )
}

export default Header;