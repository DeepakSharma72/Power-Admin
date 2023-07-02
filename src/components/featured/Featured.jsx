import React from 'react';
import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Featured() {
  return (
    <div className='featured'>
      <div className='top'>
        <h2 className='title'>Total Revenue</h2>
        <MoreVertIcon fontSize='small'/>
      </div>
      <dvi className='bottom'>
        <div className='featuredChart'>
          <CircularProgressbar value={70} text="70%" strokeWidth={3}/>
        </div>
        <p className='title'>
          Total Sales made today
        </p>
        <p className='amount'>
          2,300 Rs
        </p>
        <p className='desc'>
          Previous transactions processing. Last payments may not be included
        </p>
        <div className='summary'>
          <div className='item'>
            <div className='itemTitle'>Target</div>
            <div className='itemResult positive'>
                <KeyboardDoubleArrowUpIcon/>
                <div className='resultAmount'>
                <CurrencyRupeeIcon fontSize='small'/> 340K
                </div>
            </div>
          </div>

          <div className='item'>
            <div className='itemTitle'>Last Week</div>
            <div className='itemResult negative'>
                <KeyboardDoubleArrowDownIcon/>
                <div className='resultAmount'>
                <CurrencyRupeeIcon fontSize='small'/> 340K
                </div>
            </div>
          </div>

          <div className='item'>
            <div className='itemTitle'>Last Montht</div>
            <div className='itemResult positive'>
                <KeyboardDoubleArrowUpIcon/>
                <div className='resultAmount'>
                <CurrencyRupeeIcon fontSize='small'/> 340K
                </div>
            </div>
          </div>
        </div>
      </dvi>
    </div>
  )
}
