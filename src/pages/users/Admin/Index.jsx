import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LogoSpace, LowerBar, MainContainer, OutLetSpace, TopBar, UpperBar, AdminPage } from '../../../components/styled-components/dashboardStyledComponents';
import { CarCrash } from '@mui/icons-material';


const Index = () => {
  return (
    <AdminPage>
        <TopBar>
          <UpperBar>
            <LogoSpace>
              <CarCrash /><span>VSBA</span>
            </LogoSpace>
          </UpperBar>
          <LowerBar>
            <NavLink to={'/admin/'}>Dashbaord</NavLink>
            <NavLink to={'/admin/bookings'}>Bookings</NavLink>
            <NavLink to={'/admin/settings'}>Settings</NavLink>
          </LowerBar>
        </TopBar>
        <MainContainer>
          <OutLetSpace>
            <Outlet />
          </OutLetSpace>
        </MainContainer>
    </AdminPage>
  )
}

export default Index