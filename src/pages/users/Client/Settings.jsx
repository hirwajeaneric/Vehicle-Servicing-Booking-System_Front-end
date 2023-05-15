import React from 'react'
import { Page } from '../../../components/styled-components/pageStyledComponents'
import { Helmet } from 'react-helmet-async'

export default function Settings() {
  return (
    <Page>
      <Helmet>
        <title>User account settings</title>
        <meta name="description" content="User account settings."/> 
      </Helmet>
      Settings
    </Page>
  )
}