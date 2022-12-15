import React from 'react'
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

    const baseUrl = process.env.REACT_APP_API__BASE_URL;
    const isAdmin = userInfo?.isAdmin;
    const isSuperAdmin = userInfo?.isSuperAdmin;

    const isAdminUser = isAdmin ? isAdmin : false;


    const logoutHandler = () => {
        dispatch(logout())
        localStorage.removeItem('isLogin')
        window.location.reload();
        // history.push('/')
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
                                <LinkContainer to={`/`}>
                                    <Navbar.Brand>Home
                                        &nbsp;  |&nbsp;
                                    </Navbar.Brand>
                                </LinkContainer>
                                <LinkContainer to={`/mastertab`}>
                                    <Navbar.Brand>New
                                        &nbsp;  |&nbsp;
                                    </Navbar.Brand>
                                </LinkContainer>
                                <LinkContainer to={`/appointmentlist`}>
                                    <Navbar.Brand>Old
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
                                        <LinkContainer to='/profile'>
                                            <NavDropdown.Item>
                                                Profile
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        {isSuperAdmin ?
                                            <LinkContainer to='/review-order'>
                                                <NavDropdown.Item>
                                                    Review Order
                                                </NavDropdown.Item>
                                            </LinkContainer> : ""
                                        }

                                        <NavDropdown.Item
                                            onClick={logoutHandler}
                                        >
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                ) : (
                                    <LinkContainer to='/login'>
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