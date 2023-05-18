import React from 'react'
import { Helmet } from 'react-helmet-async'
import { AStatistic, DashboardContentContainer, DashboardTitleBar, InnerContainer, StatisticsContainer } from '../../../components/styled-components/dashboardStyledComponents'
import { RiReservedLine } from 'react-icons/ri'; 
import { MdOutlineApproval, MdOutlineIncompleteCircle } from 'react-icons/md';
import { AiOutlineSchedule } from 'react-icons/ai';

const Home = () => {
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
              <h4>34</h4>
            </div>
            <RiReservedLine style={{ background: '#ff6666' }} />
          </AStatistic>
          <AStatistic>
            <div>
              <h5>Accepted</h5>
              <h4>20</h4>
            </div>
            <MdOutlineApproval style={{ background: ' #009933' }} />
          </AStatistic>
          <AStatistic>
            <div>
              <h5>Completed</h5>
              <h4>15</h4>
            </div>
            <MdOutlineIncompleteCircle style={{ background: '#0066ff' }} />
          </AStatistic>
          <AStatistic>
            <div>
              <h5>Schedules</h5>
              <h4>34</h4>
            </div>
            <AiOutlineSchedule style={{ background: ' #b300b3' }} />
          </AStatistic>
        </StatisticsContainer>
        <InnerContainer>

        </InnerContainer>
      </DashboardContentContainer>
    </>
  )
}

export default Home