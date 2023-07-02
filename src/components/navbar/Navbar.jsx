import React, { useContext } from 'react';
import './navbar.scss';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { DarkModeContext } from '../../context/DarkModeContext';
export default function Navbar() {
  const {setDarkMode, darkmode} = useContext(DarkModeContext);
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...'></input>
          <SavedSearchIcon className='icon'/>
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageIcon className='icon' /> English
          </div>
          <div className='item'>
           {
            darkmode
            ?
            <LightModeIcon className='icon' onClick = {()=>setDarkMode(false)}/>
            : 
            <DarkModeIcon className='icon' onClick = {()=>setDarkMode(true)}/>
           }
          </div>
          <div className='item'>
            <FullscreenExitIcon className='icon' />
          </div>
          <div className='item'>
            <ChatBubbleOutlineIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <NotificationsNoneIcon className='icon' />
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <FormatListBulletedIcon className='icon' />
          </div>
          <div className='item'>
            <img className='avatar' src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg' alt = 'userimg'></img>
          </div>

        </div>
      </div>
    </div>
  )
}
