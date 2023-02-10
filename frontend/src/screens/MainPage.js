import React, { useState, useEffect } from 'react'
import '../mainpage.css'
import { Form, Card, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// Redux Actions
import { login } from '../actions/userActions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainPage = ({ location, history }) => {
  const dispatch = useDispatch()
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  // Get user login info from Redux state
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  // const notify = () => toast("Wow so easy!");
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
    toast.success('Login Successfully!', {
      position: toast.POSITION.TOP_CENTER
    });
    localStorage.setItem('isLogin', true)

    history.push('/home');

  }
  return (
    <div>
      {/* <Container>
        <Row>
          <Col sm={8}>
            <div class="row">
              <div class="col s12 m8 l4 offset-m2 offset-l4">

                <div class="card">

                  <div class="card-action teal lighten-1 white-text">
                    <h3>Login Form</h3>
                  </div>

                  <div class="card-content">
                    <div class="form-field">
                      <label for="username">Username</label>
                      <input type="text" id="username" />
                    </div><br />

                    <div class="form-field">
                      <label for="password">Password</label>
                      <input type="password" id="password" />
                    </div><br />



                    <div class="form-field">
                      <button class="btn-large waves-effect waves-dark" style={{ width: "100px" }}>Login</button>
                    </div><br />
                  </div>

                </div>
              </div>
            </div>
          </Col>

        </Row>

      </Container> */}
      {/* <div class="row">
        <div class="col s12 m8 l4 offset-m2 offset-l4">

          <div class="card">

            <div class="card-action teal lighten-1 white-text">
              <h3>Login Form</h3>
            </div>

            <div class="card-content">
              <div class="form-field">
                <label for="username">Username</label>
                <input type="text" id="username" />
              </div><br />

              <div class="form-field">
                <label for="password">Password</label>
                <input type="password" id="password" />
              </div><br />



              <div class="form-field">
                <button class="btn-large waves-effect waves-dark" style={{ width: "100px" }}>Login</button>
              </div><br />
            </div>

          </div>
        </div>
      </div> */}



      <section className="vh-100" >
        <div className="container  h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src={"images/homeopathy2.png"}
                      alt="login form" className="img-fluid" style={{
                        borderRadius: "1rem 0 0 1rem ",
                        margin: "100px 0 0 11px",
                        width: "325px",
                        height: "351px"
                      }} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <Form onSubmit={submitHandler}>

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <img
                            className="logo"
                            src={"images/vaidya-logo-preview.png"}
                            alt="vaidya Brand Logo"
                            style={{
                              width: "237px",
                              margin: "-26px 61px"
                            }}
                          />
                         
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                        <div className="form-outline mb-4">
                          <input type="email" id="form2Example17" className="form-control form-control-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                          <label className="form-label" for="form2Example17">Email address</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="password" id="form2Example27" className="form-control form-control-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                          <label className="form-label" for="form2Example27">Password</label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                          <ToastContainer />
                        </div>

                      
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default MainPage