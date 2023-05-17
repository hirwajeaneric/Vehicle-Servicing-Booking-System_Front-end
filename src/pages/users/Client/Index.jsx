import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../../components/sections/NavigationBar';

const Index = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'space-between', position: 'relative' }}>
        <NavigationBar />
        <Outlet />
    </div>
  )
}

export default Index