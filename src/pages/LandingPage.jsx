import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { Banner, Services, ServicesContainer, AService } from '../components/styled-components/landingPageComponents';
import { Button } from '@mui/material';
import NavigationBar from '../components/sections/NavigationBar';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Helmet>
        <title>Welcome to VSBA.</title>
        <meta name="description" content="Welcome to VSBA."/>
      </Helmet>
      <NavigationBar />

      <Banner>
        <h1>Welcome to VSBA</h1>
        <h1>Your best Vehicle Services Booking Application</h1>
        <p>Book for a slot in the garage, and we shall tweak your vehicle in no time.</p>
        <div>
          <Button variant='contained' size='medium' color='info' onClick={(e) =>{ navigate('/book-now'); }}>Book now</Button>
          <Button variant='contained' size='medium' color='secondary' onClick={(e) =>{ navigate('/client/signup'); }}>Create an account</Button>
        </div>
      </Banner>
      <Services>
        <h2>Our services</h2>
        <ServicesContainer>
          <AService>
            
          </AService>
        </ServicesContainer>
      </Services>
    </div>
  )
}

export default LandingPage
