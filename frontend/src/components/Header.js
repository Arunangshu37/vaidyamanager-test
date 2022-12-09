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
                                <h1 style={{color:"white"}}>Vaidya Manager</h1>
                                {/* <img
                                    className="logo"
                                    // src={"images/mindvein.png"}
                                    src={"http://localhost:3000/images/vaidyalogo.png"}
                                    alt="Vaidya Brand Logo"
                                    width="87px"
                                    height="50px"
                                /> */}
                              {/* <img src={'images/mindvein.png'} /> */}
                            </Navbar.Brand>
                        </LinkContainer>

                        <Navbar.Toggle aria-controls='basic-navbar-nav' />

                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='me-auto'>
                                <LinkContainer to={`/`}>
                                    <Navbar.Brand>Home
                                        {/* &nbsp;  |&nbsp; */}
                                    </Navbar.Brand>
                                </LinkContainer>
                                {/* <LinkContainer to={`/demoReg`}>
                                    <Navbar.Brand>Register
                                        &nbsp;  |&nbsp;
                                    </Navbar.Brand>
                                </LinkContainer> */}
                                {/* <LinkContainer to={`/date`}>
                                    <Navbar.Brand>Demo dates
                                        &nbsp;  |&nbsp;
                                    </Navbar.Brand>
                                </LinkContainer> */}
                                {/* <LinkContainer to={isLogin ? `/consultation` : '/login'}>
                                    <Navbar.Brand> Online Consultation
                                        &nbsp;  |&nbsp;
                                    </Navbar.Brand>
                                </LinkContainer> */}
                                {
                                    isLogin && isSuperAdmin ? <>
                                        <LinkContainer to={`/Role`}>
                                            <Navbar.Brand>Create User
                                                &nbsp;  |&nbsp;
                                            </Navbar.Brand>
                                        </LinkContainer>
                                    </> : null
                                }
                                {
                                    isLogin && isSuperAdmin ? <>
                                        <LinkContainer to={`/appointmentlist`}>
                                            <Navbar.Brand> Appointment List
                                                &nbsp;  |&nbsp;
                                            </Navbar.Brand>
                                        </LinkContainer>
                                    </> : null
                                }
                                {/* <LinkContainer to='/testrefund'>
                                    <Navbar.Brand>Refund
                                        &nbsp;  |&nbsp;
                                    </Navbar.Brand>
                                </LinkContainer> */}
                                {/* <LinkContainer to='/prescribetemplate'>
                                    <Navbar.Brand>Trial
                                        &nbsp;  |&nbsp;
                                    </Navbar.Brand>
                                </LinkContainer> */}
                                {/* <LinkContainer to='/prescription'>
                                    <Navbar.Brand>Prescription
                                        &nbsp;  |&nbsp;
                                    </Navbar.Brand>
                                </LinkContainer> */}
                                {/* <LinkContainer to='/transaction'>
                                    <Navbar.Brand>Transaction
                                        &nbsp;  |&nbsp;
                                    </Navbar.Brand>
                                </LinkContainer> */}
                                {/* <LinkContainer to='/E-pharmacy'>
                                    <Navbar.Brand>E-pharmacy
                                        &nbsp; |&nbsp;
                                    </Navbar.Brand>
                                </LinkContainer> */}
                                {/* <LinkContainer  to='/lab-test'>
                                    <Navbar.Brand>Lab Test
                                        &nbsp;  |&nbsp;
                                    </Navbar.Brand>
                                </LinkContainer> */}
                                {/* <LinkContainer to='/Digital Therapy'>
                                    <Navbar.Brand>Digital Therapy
                                        &nbsp;  |&nbsp;
                                    </Navbar.Brand>
                                </LinkContainer> */}

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
                            <Nav className='ml-auto' >
                                {/* <LinkContainer to='/cart' className='nav-link'>
                                    <Nav.Link>
                                        <i className='fa fa-shopping-cart mr-2'></i>
                                        Cart
                                    </Nav.Link>
                                </LinkContainer> */}
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
                                        {/* {isSuperAdmin ?
                                            <LinkContainer to='/review-order'>
                                                <NavDropdown.Item>
                                                    Review Order
                                                </NavDropdown.Item>
                                            </LinkContainer> : ""
                                        } */}

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
        </ >
    )
}

export default Header
