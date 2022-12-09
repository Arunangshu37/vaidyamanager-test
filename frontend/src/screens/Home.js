import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Card } from 'react-bootstrap'
// Components
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
// Redux
import { listProducts } from '../actions/productActions'
import Plan from '../components/Plan';
import ReadMoreReact from 'read-more-react';
import SuccessStories from '../components/SuccessStories'
import DoctorCard from '../components/DoctorCard'

const Home = () => {
  const dispatch = useDispatch()
  // Grab the data from the state
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList;
  const baseUrl = process.env.REACT_APP_API__BASE_URL;
  // const mindevinProduct = products.filter((task) => task.category == "Tablets");
  const plans = products?.filter((task) => task.category == "Plans");
  // Whatever is put inside the useEffect function will run as soon as the component loads.
  useEffect(() => {
    // Dispatch the list products action and fill our state
    dispatch(listProducts())
  }, [dispatch])


  return (
    <>
      <DoctorCard />
      <Container>
        <div className="hl-help">
          <div className="title">
            <h1 style={{
              display: "block",
              margin: "20px",
              fontSize: "xx-large",
              fontFamily:"Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"
            }}>Three steps Mindvein can help you</h1>
          </div>
          <div className="row no-margin">
            <div className="col l4 s12 center">
              <div className="help-container">
                <div className="img-container">
                  <img
                    src={"images/connect.png"}
                    alt="" />
                </div>
                <div className="content-container">
                  <div className="details-container">
                    <span>1</span>
                    <span className="details">Connect with your Expert</span>
                  </div>
                  <div className="desc">
                    Chat anonymously with a Mindvein expert who's here to help you and not judge you.
                  </div>
                </div>
              </div>
            </div>
            <div className="col l4 s12 center">
              <div className="help-container">
                <div className="img-container">
                  <img
                    src={"images/discuss.png"}
                    alt="" />
                </div>
                <div className="content-container">
                  <div className="details-container">
                    <span>2</span>
                    <span className="details">Discuss your Concerns</span>
                  </div>
                  <div className="desc">
                    Open up to your Expert in a space where you get the guidance you need, and your concerns get the attention they deserve.
                  </div>
                </div>
              </div>
            </div>
            <div className="col l4 s12 center">
              <div className="help-container">
                <div className="img-container">
                  <img
                    src={"images/support.png"}
                    alt="" />
                </div>
                <div className="content-container">
                  <div className="details-container">
                    <span>3</span>
                    <span className="details">Unleash a Better You</span>
                  </div>
                  <div className="desc">
                    With 24X7 support from our experts, bid goodbye to your old self and be on your way to becoming a better you.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 style={{
          display: "block",
          margin: "20px",
          fontSize: "xx-large",
          fontFamily:  "Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
          padding: "2rem",
        }}>Our Success Stories!</h1>
        <SuccessStories />

        <h1 style={{
          display: "block",
          margin: "20px",
          fontSize: "xx-large",
          fontFamily:  "Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"
        }}> Mindvein Experts</h1>

        <div className="container">
          <div className="row">
            {/* <!-- Single Starts  --> */}
            <div className="col-lg-3 col-md-6">

              <div className="team__item set-bg" style={{
                backgroundImage: `url("images/Final1.png")`,
                
              }}>
                <div className="team__text">
                  <div className="team__title">
                    <h5>Dr. Rahul Bhatambre</h5>
                    <span>Neurosychiatrist & Sexologist</span>
                  </div>
                  <p>M.B.B.S., D.P.M., (Psychiatry) 10 years of experience
                    in sexology and psychiatry Registered under Medical Council of India (M.C.I.) </p>
                </div>
              </div>

              <h5 className="t1" style={{
                position: "absolute",
                bottom: "14%",
                left: "21%",
                fontSize: "1rem",
                zIndex: "1",
                fontWeight:"bold",
                color:"#fff"
              }}>Dr. Rahul Bhatambre</h5>
            </div>
            {/* <!-- Single Ends    --> */}
            <div className="col-lg-3 col-md-6">
              <div className="team__item set-bg" style={{
                backgroundImage: `url("images/Final2.png")`,
               
              }}>
                <div className="team__text">
                  <div className="team__title">
                    <h5>Dr. Praksh Pawar</h5>
                    <span>Urology</span>
                  </div>
                  <p>M.B.B.S., M.S., (General Surgery) M.C.H., (Urology) 11 years of
                    experience in andrology and sexology Registered under Medical Council of India (M.C.I.).</p>

                </div>
              </div>
              <h5 className="t1" style={{
                position: "absolute",
                bottom: "14%",
                left: "21%",
                fontSize: "1rem",
                zIndex: "1",
                fontWeight:"bold",
                color:"#fff"
              }}>Dr. Praksh Pawar</h5>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team__item set-bg" style={{
                backgroundImage: `url("images/Final3.png")`,
          
              }}>
                <div className="team__text">
                  <div className="team__title">
                    <h5>Mrs. Sreeta Nair</h5>
                    <span>Psychologist</span>
                  </div>
                  <p>M.PHIL. (Clinical Psychology) 06 years of
                    experience in sexual and mental health Registered under Rehabilitation Council of India (R.C.I.) </p>

                </div>
              </div>
              <h5 className="t1" style={{
                position: "absolute",
                bottom: "14%",
                left: "21%",
                fontSize: "1rem",
                zIndex: "1",
                fontWeight:"bold",
                color:"#fff"
              }}>Mrs. Sreeta Nair</h5>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team__item set-bg" style={{
                backgroundImage: `url("images/Final4.png")`,
              
              }}>
                {/* to add background image in above tag */}
                <div className="team__text">
                  <div className="team__title">
                    <h5>Dr. Swapnil Bhopie</h5>
                    <span>Psychologist</span>
                  </div>
                  <p>M.PHIL. (Clinical Psychology) 10 years of
                    experience in sexual and mental health Registered under Rehabilitation Council of India (R.C.I.)</p>
                </div>
              </div>
              <h5 className="t1" style={{
                position: "absolute",
                bottom: "14%",
                left: "21%",
                fontSize: "1rem",
                zIndex: "1",
                fontWeight:"bold",
                color:"#fff"
              }}>Dr. Swapnil Bhopie</h5>
            </div>
          </div>
        </div>
        {/* mindvein flow */}
      </Container>
    </>
  )
}


export default Home
