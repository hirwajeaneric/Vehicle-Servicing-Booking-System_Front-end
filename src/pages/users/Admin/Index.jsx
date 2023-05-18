import React from 'react';
import { Outlet } from 'react-router-dom';
import { LogoSpace, LowerBar, MainContainer, OutLetSpace, SideNavigationBar, ToBar, TopBar, UpperBar } from '../../../components/styled-components/dashboardStyledComponents';
import { CarCrash } from '@mui/icons-material';


const Index = () => {
  return (
    <div>
        <TopBar>
          <UpperBar>
            <LogoSpace>
              <CarCrash /><span>VSBA</span>
            </LogoSpace>
          </UpperBar>
          <LowerBar>
            
          </LowerBar>
        </TopBar>
        <MainContainer>
          <SideNavigationBar>

          </SideNavigationBar>
          <OutLetSpace>
            <Outlet />
          </OutLetSpace>
        </MainContainer>
    </div>
  )
}

export default Index