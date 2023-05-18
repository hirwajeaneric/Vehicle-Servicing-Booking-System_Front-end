import React from 'react'
import { Helmet } from 'react-helmet-async'
import { DashboardContentContainer, DashboardTitleBar } from '../../../components/styled-components/dashboardStyledComponents'

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
      </DashboardContentContainer>
    </>
  )
}

export default Home