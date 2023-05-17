import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Banner } from '../components/styled-components/landingPageComponents';
import NavigationBar from '../components/sections/NavigationBar';

const BookingNow = () => {
  return (
    <div>
      <Helmet>
        <title>Book a slot now.</title>
        <meta name="description" content="Book a slot with  VSBA."/>
      </Helmet>
      <NavigationBar />
      <Banner>
        <h1>Book your slot now.</h1>
      </Banner>
    </div>
  )
}

export default BookingNow
