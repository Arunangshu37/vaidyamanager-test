import React, { useState, useEffect } from 'react'
import '../mainpage.css'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux'
// Redux Actions
import { login } from '../actions/userActions'

const MainPage = () => {
  const dispatch = useDispatch()
  // Get user login info from Redux state
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  return (
    <div>
      MainPage
      <section className="vh-100" >
        <div className="container  h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src={"images/homeopathy2.png"}
                      alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem ", 
                      margin: "100px 0 0 11px",
                      width: "325px",
                      height: "351px"
                   }} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form>

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
                          {/* <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i> */}
                          {/* <span className="h1 fw-bold mb-0">Logo</span> */}
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                        <div className="form-outline mb-4">
                          <input type="email" id="form2Example17" className="form-control form-control-lg" />
                          <label className="form-label" for="form2Example17">Email address</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="password" id="form2Example27" className="form-control form-control-lg" />
                          <label className="form-label" for="form2Example27">Password</label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="button">Login</button>
                        </div>

                        <a className="small text-muted" href="#">Forgot password?</a>
                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account? <a href="#"
                          style={{ color: "#393f81" }}>Register here</a></p>
                        {/* <a href="#" className="small text-muted">Terms of use.</a>
                  <a href="#" className="small text-muted">Privacy policy</a> */}
                      </form>

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