import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { AttachmentContainer, CommandButtons, DashboardContentContainer, DashboardTitleBar, DataColumn, FirstPart, FormContainer, InnerContainer, LeftSide, RightSide, SecondPart, ThirdPart } from '../../../components/styled-components/dashboardStyledComponents'
import axios from 'axios'
import Apis from '../../../utils/Apis'
import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Report = () => {
  const params = useParams();
  const [bookingDetails, setBookingDetails] = useState({});
  const [displayAttachment, setDisplayAttachments] = useState('');
  const [updates, setUpdates] = useState({ status: '', workStatus: '' })

  const [progress, setProgress] = useState({ value: '', disabled: false});
  const [open, setOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState({ message: '', severity: ''});
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  useEffect(()=>{
    axios.get(`${Apis.bookingApis.findById}${params.id}`)
    .then(response => {
      setBookingDetails(response.data.booking);
      setDisplayAttachments(bookingDetails.photos[0]);
    })
    .catch(error => console.log("Error: "+error));
  },[bookingDetails.photos, params.id]);

  const handleFormInput = ({currentTarget: input}) => { 
    setUpdates({
      ...updates, [input.name]: input.value
    })
    console.log(updates);
  };

  const updateBooking = (e) => {
    e.preventDefault();

    if (updates.status !== '') {
      bookingDetails.status = updates.status;
    } else if (updates.workStatus !== '') {
      bookingDetails.workStatus = updates.workStatus;
    }

    setProgress({ value: 'CONFIRMING ...', disabled: true });
    axios.put(`${Apis.bookingApis.update}${params.id}`, bookingDetails)
    .then(response => {
      setTimeout(()=>{
        if (response.status === 201) {            
          setProgress({ value: '', disabled: false });
          setResponseMessage({message: response.data.message, severity: 'success'});
          setOpen(true);  
        }
      }, 2000); 
    })
    .catch(error => {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setResponseMessage({ message: error.response.data.msg, severity: 'error' });
        setOpen(true);
        setProgress({ value: '', disabled: false });
      }
    });
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
        <FormContainer onSubmit={updateBooking} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
              <label htmlFor="submittedOn">Submitted on</label>
              <p>{bookingDetails.submittedOn}</p>
            </DataColumn>
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
            <DataColumn style={{ flexDirection: 'row'}}>
              <DataColumn>
                <label htmlFor="status">Status</label>
                <p>{bookingDetails.status}</p>
              </DataColumn>
              <DataColumn>
                <label htmlFor="status">Update</label>
                <select id='status' name={"status"} onChange={handleFormInput}>
                  <option value={''}>Choose status</option>
                  <option value={'Pending'}>Pending</option>
                  <option value={'Confirmed'}>Confirmed</option>
                  <option value={'Rescheduled'}>Rescheduled</option>
                  <option value={'Cancelled'}>Cancelled</option>
                </select>
              </DataColumn>
            </DataColumn>
            <DataColumn style={{ flexDirection: 'row'}}>
              <DataColumn>
                <label htmlFor="workStatus">Work status</label>
                <p>{bookingDetails.workStatus}</p>
              </DataColumn>
              <DataColumn>
                <label htmlFor="workStatus">Update</label>
                <select id='workStatus' name={"workStatus"} onChange={handleFormInput}>
                  <option value={''}>Choose work progress</option>
                  <option value={'Todo'}>Todo</option>
                  <option value={'In progress'}>In progress</option>
                  <option value={'Ended'}>Ended</option>
                </select>
              </DataColumn>
            </DataColumn>
          </SecondPart>

          <ThirdPart onSubmit={updateBooking}>
            <DataColumn>
              <label htmlFor="submittedOn">Attachment</label>
              <AttachmentContainer>
              {displayAttachment ?
                <a target='about_blank' href={`http://localhost:5151/api/v1/vsb/files/${displayAttachment}`}><img src={`http://localhost:5151/api/v1/vsb/files/${displayAttachment}`} alt='' /></a>
              :
              <p style={{ textAlign: 'center' }}>No attachment available</p>
              }
              </AttachmentContainer>
            </DataColumn>
            <CommandButtons>
              <Button type='submit' variant='contained' color='primary' size='small'>CONFIRM</Button>
            </CommandButtons>
          </ThirdPart>
        </FormContainer>

        {/* Response message  */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={responseMessage.severity} sx={{ width: '100%' }}>{responseMessage.message}</Alert>
        </Snackbar>
      </DashboardContentContainer>
    </>
  )
}

export default Report