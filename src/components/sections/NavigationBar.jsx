import React from 'react'
import { SimpleTopNavigation } from '../styled-components/landingPageComponents'
import { NavLink } from 'react-router-dom'

export default function NavigationBar() {
  return (
    <SimpleTopNavigation>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/book-now'}>Book now</NavLink></li>
        <li><NavLink to={'/client/'}>My Account</NavLink></li>
      </ul>
    </SimpleTopNavigation>
  )
}
