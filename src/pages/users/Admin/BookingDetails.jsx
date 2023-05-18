import React, { useEffect, useState } from 'react'
import { Page } from '../../../components/styled-components/pageStyledComponents'
import { Helmet } from 'react-helmet-async'
import { DashboardContentContainer, DashboardTitleBar, DataColumn, InnerContainer, LeftSide, RightSide } from '../../../components/styled-components/dashboardStyledComponents'
import axios from 'axios'
import Apis from '../../../utils/Apis'
import { useParams } from 'react-router-dom'

const Report = () => {
  const params = useParams();
  const [bookingDetails, setBookingDetails] = useState({});

  useEffect(()=>{
    axios.get(`${Apis.bookingApis.findById}${params.id}`)
    .then(response => {
      setBookingDetails(response.data.booking);
    })
    .catch(error => console.log("Error: "+error));
  },[params.id]);

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
          <LeftSide>
            <DataColumn>
              <label htmlFor="fullName">Full name</label>
              <p>{bookingDetails.fullName}</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="phone">Phone</label>
              <p>{bookingDetails.phone}</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="email">Email</label>
              <p>{bookingDetails.email}</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="vehicleType">Vehicle Type</label>
              <p>{bookingDetails.vehicleType}</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="typeOfService">Type of service</label>
              <p>{bookingDetails.typeOfService}</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="serviceDescription">Service Description</label>
              <p>{bookingDetails.serviceDescription}</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="clientConfirmation">Client Confirmation</label>
              <p>{bookingDetails.clientConfirmation}</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="serviceDay">Service day</label>
              <p>{bookingDetails.serviceDay}</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="startHour">Start hour</label>
              <p>{bookingDetails.startHour}</p>
            </DataColumn>
          </LeftSide>
          <RightSide>

          </RightSide>
        </InnerContainer>
      </DashboardContentContainer>
    </>
  )
}

export default Report