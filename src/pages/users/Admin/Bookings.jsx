import React from 'react'
import { Helmet } from 'react-helmet-async'
import { DashboardContentContainer, DashboardTitleBar } from '../../../components/styled-components/dashboardStyledComponents'

const Bookings = () => {
  return (
    <>
      <Helmet>
        <title>Bookings - Administrator</title>
        <meta name="description" content="List of bookings."/> 
      </Helmet>
      <DashboardContentContainer>
        <DashboardTitleBar>
          <h3>Bookings</h3>
        </DashboardTitleBar>
      </DashboardContentContainer>
    </>
  )
}

export default Bookings