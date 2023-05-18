import React, { useEffect, useState } from 'react'
import { Page } from '../../../components/styled-components/pageStyledComponents'
import { Helmet } from 'react-helmet-async'
import { AttachmentContainer, DashboardContentContainer, DashboardTitleBar, DataColumn, FirstPart, InnerContainer, LeftSide, RightSide, SecondPart, ThirdPart } from '../../../components/styled-components/dashboardStyledComponents'
import axios from 'axios'
import Apis from '../../../utils/Apis'
import { useParams } from 'react-router-dom'

const Report = () => {
  const params = useParams();
  const [bookingDetails, setBookingDetails] = useState({});
  const [displayAttachment, setDisplayAttachments] = useState('');

  useEffect(()=>{
    axios.get(`${Apis.bookingApis.findById}${params.id}`)
    .then(response => {
      setBookingDetails(response.data.booking);
      setDisplayAttachments(bookingDetails.photos[0]);
    })
    .catch(error => console.log("Error: "+error));
  },[bookingDetails.photos, params.id]);

  const changeDisplayAttachment = () => {
    
  }

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
        <InnerContainer style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <FirstPart>
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
          </FirstPart>
          <SecondPart>
            <DataColumn>
              <label htmlFor="serviceDay">Service day</label>
              <p>{bookingDetails.serviceDay}</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="startHour">Start hour</label>
              <p>{bookingDetails.startHour} h</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="temporalSlotNumber">Slot number</label>
              <p>{bookingDetails.temporalSlotNumber}</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="status">Status</label>
              <p>{bookingDetails.status}</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="workStatus">Work status</label>
              <p>{bookingDetails.workStatus}</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="submittedOn">Submitted on</label>
              <p>{bookingDetails.submittedOn}</p>
            </DataColumn>
          </SecondPart>
          <ThirdPart>
            <DataColumn>
              <label htmlFor="submittedOn">Attachment</label>
              <AttachmentContainer>

              </AttachmentContainer>
              <img src={`http://localhost:5151/api/v1/vsb/${displayAttachment}`} alt='' />
            </DataColumn>
          </ThirdPart>
        </InnerContainer>
      </DashboardContentContainer>
    </>
  )
}

export default Report