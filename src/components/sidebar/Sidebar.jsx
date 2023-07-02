import React, { useContext } from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Person4Icon from '@mui/icons-material/Person4';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/DarkModeContext';
export default function Sidebar() {
  const { setDarkMode } = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>PowerAdmin</span>
        </Link>
      </div>
      <hr></hr>
      <div className='center'>
        <ul>
          <p className='title'>
            MAIN
          </p>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className='title'>
            Lists
          </p>
          <Link to='/users' style={{ textDecoration: 'none' }}>
            <li>
              <GroupIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
          <Link to='/products' style={{ textDecoration: 'none' }}>
            <li>
              <ProductionQuantityLimitsIcon className='icon' />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <BreakfastDiningIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className='title'>
            USEFUL
          </p>
          <li>
            <StackedBarChartIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className='icon' />
            <span>Notifications</span>
          </li>
          <p className='title'>
            SERVICE
          </p>
          <li>
            <MonitorHeartIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className='icon' />
            <span>Logs</span>
          </li>
          <p className='title'>
            USER
          </p>
          <Link to='/users/profile' style={{ textDecoration: 'none' }}>
            <li>
              <Person4Icon className='icon' />
              <span>Profile</span>
            </li>
          </Link>
          <li>
            <LogoutIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption' onClick={() => setDarkMode(false)}></div>
        <div className='colorOption' onClick={() => setDarkMode(true)}></div>
      </div>
    </div>
  )
}
