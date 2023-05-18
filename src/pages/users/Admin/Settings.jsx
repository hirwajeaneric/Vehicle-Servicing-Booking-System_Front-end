import React from 'react'
import { Helmet } from 'react-helmet-async'
import { DashboardContentContainer, DashboardTitleBar } from '../../../components/styled-components/dashboardStyledComponents'

const Settings = () => {
  return (
    <>
      <Helmet>
        <title>Account settings - Administrator</title>
        <meta name="description" content="Administrator's user account settings page."/> 
      </Helmet>
      <DashboardContentContainer>
        <DashboardTitleBar>
          <h3>Settings</h3>
        </DashboardTitleBar>
      </DashboardContentContainer>
    </>
  )
}

export default Settings