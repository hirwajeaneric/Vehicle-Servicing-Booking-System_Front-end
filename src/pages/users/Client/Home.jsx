import React from 'react'
import { ABooking, ListOfBookings, Page, SectionOrPageContainer } from '../../../components/styled-components/pageStyledComponents'
import { Helmet } from 'react-helmet-async'

export default function NewBooking() {
  return (
    <Page>
      <Helmet>
        <title>Your VSBA account status</title>
        <meta name="description" content="User home account in their Vehicle Servicing Booking Application."/> 
      </Helmet>
      <SectionOrPageContainer>
        <h1 style={{ textAlign: 'left' }}>My bookings</h1>
        <ListOfBookings>
          <ABooking>
            
          </ABooking>
        </ListOfBookings>
      </SectionOrPageContainer>
    </Page>
  )
}