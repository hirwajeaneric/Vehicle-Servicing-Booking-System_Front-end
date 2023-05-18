import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { AStatistic, DashboardContentContainer, DashboardTitleBar, InnerContainer, StatisticsContainer } from '../../../components/styled-components/dashboardStyledComponents'
import { RiReservedLine } from 'react-icons/ri'; 
import { MdOutlineApproval, MdOutlineIncompleteCircle } from 'react-icons/md';
import { AiOutlineSchedule } from 'react-icons/ai';
import axios from 'axios';
import Apis from '../../../utils/Apis';
import BookingsTable from '../../../components/tables/BookingsTable';

const Home = () => {
  const [listOfBookings, setListOfBookings] = useState([]);

  useEffect(() => {
    axios.get(Apis.bookingApis.list)
    .then(response => {
      response.data.bookings.forEach(element => {
        element.id = element._id;
      })
      response.data.bookings.sort((a, b) => new Date(b.submittedOn) - new Date(a.submittedOn))
      setListOfBookings(response.data.bookings);
    })
    .catch(error => console.log('Error: '+error));
  },[])

  return (
    <>
      <Helmet>
        <title>Administrator - Dashboard home</title>
        <meta name="description" content="Administrator's home page."/> 
      </Helmet>
      <DashboardContentContainer>
        <DashboardTitleBar>
          <h3>Dashboard</h3>
        </DashboardTitleBar>
        <StatisticsContainer>
          <AStatistic>
            <div>
              <h5>Total bookings</h5>
              <h4>3</h4>
            </div>
            <RiReservedLine style={{ background: '#ff6666' }} />
          </AStatistic>
          <AStatistic>
            <div>
              <h5>Accepted</h5>
              <h4>0</h4>
            </div>
            <MdOutlineApproval style={{ background: ' #009933' }} />
          </AStatistic>
          <AStatistic>
            <div>
              <h5>Completed</h5>
              <h4>0</h4>
            </div>
            <MdOutlineIncompleteCircle style={{ background: '#0066ff' }} />
          </AStatistic>
          <AStatistic>
            <div>
              <h5>Schedules</h5>
              <h4>3</h4>
            </div>
            <AiOutlineSchedule style={{ background: ' #b300b3' }} />
          </AStatistic>
        </StatisticsContainer>

        <InnerContainer>
          <h3>Recent bookings</h3>
          <BookingsTable data={listOfBookings} />
        </InnerContainer>
      </DashboardContentContainer>
    </>
  )
}

export default Home