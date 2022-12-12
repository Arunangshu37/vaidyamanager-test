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
  const baseUrl = process.env.REACT_APP_API__BASE_URL;
  
  // Whatever is put inside the useEffect function will run as soon as the component loads.
  


  return (
    <>
      <Container>
      <img className='center'
      src={"images/vaidyalogo3.png"} width= "546px"
       height=" 425px"/>
      {/* Features
       */}

      </Container>
    </>
  )
}


export default Home
