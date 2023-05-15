import React from 'react'
import { Helmet } from 'react-helmet-async'
import { NavLink } from 'react-router-dom'
import { SimpleTopNavigation, Banner } from '../components/styled-components/landingPageComponents';

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>404 - Page not found.</title>
        <meta name="description" content="Page not found."/>
      </Helmet>
      <SimpleTopNavigation>
        <ul>
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/book-now'}>Book now</NavLink></li>
          <li><NavLink to={'/client/'}>My Account</NavLink></li>
        </ul>
      </SimpleTopNavigation>
      <Banner>
        <h1>404</h1>
        <h2>Page not found</h2>
      </Banner>
    </div>
  )
}

export default ErrorPage
