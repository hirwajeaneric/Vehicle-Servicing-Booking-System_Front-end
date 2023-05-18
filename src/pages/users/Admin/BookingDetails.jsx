import React from 'react'
import { Page } from '../../../components/styled-components/pageStyledComponents'
import { Helmet } from 'react-helmet-async'
import { DashboardContentContainer, DashboardTitleBar, InnerContainer } from '../../../components/styled-components/dashboardStyledComponents'

const Report = () => {
  return (
    <>
      <Helmet>
        <title>Book details - Administrator</title>
        <meta name="description" content="Administrator's booking details page."/> 
      </Helmet>
      <DashboardContentContainer>
        <DashboardTitleBar>
          <h3>Booking details</h3>
        </DashboardTitleBar>
        <InnerContainer>
          <h3>Recent bookings</h3>
          
        </InnerContainer>
      </DashboardContentContainer>
    </>
  )
}

export default Report