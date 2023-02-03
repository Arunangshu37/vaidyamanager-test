import React, { useState, useEffect } from 'react'
// Bootstrap UI Components
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
// React Redux
import { useDispatch, useSelector } from 'react-redux'
// Redux User Actions
import { logout } from '../actions/userActions'
import { useHistory } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch()
    // const history = useHistory()

    const isLogin = localStorage.getItem('isLogin');
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    console.log(userInfo)

    const baseUrl = process.env.REACT_APP_API__BASE_URL;
    const isAdmin = userInfo?.isAdmin;
    const isSuperAdmin = userInfo?.isSuperAdmin;

    const isAdminUser = isAdmin ? isAdmin : false;

    const logoutHandler = () => {
        dispatch(logout())
        localStorage.removeItem('isLogin')
        window.location.reload();
    }

    return (

        <>
            <header>
                <Navbar
                    bg='primary'
                    variant='dark'
                    expand='lg'
                    collapseOnSelect
                    fixed="top"
                >
                    <Container>
                        <LinkContainer to='/'>
                            <Navbar.Brand>
                                <img
                                    className="logo"
                                    src={"images/vaidya-logo-preview.png"}
                                    // src={"http://localhost:2000/images/vaidya-logo-preview.resized.png"}
                                    alt="mindvein Brand Logo"
                                />
                            </Navbar.Brand>
                        </LinkContainer>

                        <Navbar.Toggle aria-controls='basic-navbar-nav' />

                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='me-auto'>
                                <LinkContainer to={`/home`}>
                                    <Navbar.Brand>Home
                                        &nbsp;  |&nbsp;
                                    </Navbar.Brand>
                                </LinkContainer>
                                {
                                    isSuperAdmin ? <LinkContainer to={`/dashboard`}>
                                        <Navbar.Brand>Dashboard
                                            &nbsp;  |&nbsp;
                                        </Navbar.Brand>
                                    </LinkContainer> : ""
                                }
                                {
                                    isSuperAdmin ? <LinkContainer to={`/mastertab`}>
                                        <Navbar.Brand>Patient Registeration
                                            &nbsp;  |&nbsp;
                                        </Navbar.Brand>
                                    </LinkContainer> : ""
                                }

                                {
                                    isSuperAdmin ? <LinkContainer to={`/old-mastertab`}>
                                        <Navbar.Brand>OPD Visits
                                            &nbsp;  |&nbsp;
                                        </Navbar.Brand>
                                    </LinkContainer> : ""
                                }

                                {isAdmin ? <LinkContainer to={`/receptionist`}>
                                    <Navbar.Brand>Patient Data
                                        &nbsp;  |&nbsp;
                                    </Navbar.Brand>
                                </LinkContainer> : ""}






                                <LinkContainer to={`/about`}>
                                    <Navbar.Brand>About
                                        &nbsp;  |&nbsp;
                                    </Navbar.Brand>
                                </LinkContainer>

                                <LinkContainer to={`/contact-us`}>
                                    <Navbar.Brand>Contact
                                        &nbsp;  |&nbsp;
                                    </Navbar.Brand>
                                </LinkContainer>


                                {/* <NavDropdown title="Know More" id="basic-nav-dropdown" renderMenuOnMount={true}>
                                    <NavDropdown.Item href="/about-us" >
                                        About Us
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/contact-us">
                                        Contact Us
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/terms-condition">
                                        Terms & Conditions
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/privacy-policy" >
                                        Privacy & Policy
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/refund-policy" >
                                        Refund Policy
                                    </NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                        </Navbar.Collapse>

                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='ml-auto'>
                                {userInfo ? (
                                    <NavDropdown
                                        title={userInfo.name}
                                        id='username'
                                    >
                                        {/* <LinkContainer to='/profile'>
                                            <NavDropdown.Item>
                                                Profile
                                            </NavDropdown.Item>
                                        </LinkContainer> */}
                                        {/* <LinkContainer to='/visitingcard'>
                                            <NavDropdown.Item>
                                                Visiting Card
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to='/settings'>
                                            <NavDropdown.Item>
                                                Setting
                                            </NavDropdown.Item>
                                        </LinkContainer> */}
                                        <NavDropdown.Item
                                            onClick={logoutHandler}
                                        >
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                ) : (
                                    <LinkContainer to='/'>
                                        <Nav.Link>
                                            <i className='fa fa-user mr-2'></i>
                                            Sign In
                                        </Nav.Link>
                                    </LinkContainer>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>

    )
}

export default Header