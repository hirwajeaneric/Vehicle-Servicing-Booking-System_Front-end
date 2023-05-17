import React from 'react'
import { SimpleTopNavigation } from '../styled-components/landingPageComponents'
import { Link, NavLink } from 'react-router-dom'

export default function NavigationBar() {
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('cltTkn');
    localStorage.removeItem('cltInfo');
    window.location.replace('/');
  }

  return (
    <SimpleTopNavigation>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/book-now'}>Book now</NavLink></li>
      </ul>
      <ul>
        {localStorage.getItem('cltTkn') ?
          <>
            <li><NavLink to={'/client/'}>My account</NavLink></li>
            <li><NavLink to={'/client/settings'}>Settings</NavLink></li> 
          </>
        :
          <li><NavLink to={'/client/signin'}>Sign in</NavLink></li>
        }
        {localStorage.getItem('cltTkn') && <li><Link to={"/"} onClick={logout}>Log out</Link></li>}
      </ul>
    </SimpleTopNavigation>
  )
}
