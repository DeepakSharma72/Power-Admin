import React from 'react';
import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Charts';
import Table from '../../components/table/Table';

export default function Single() {
  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        <div className='top'>
          <div className='left'>
            <div className='editButton'>
              Edit
            </div>
            <h2 className='title'>Information</h2>
            <div className='item'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe6khs7N-fcxCTdErZDXlIjFNag33mzFyNXGsBCXdGBhcqFo5yeVumgyFqCJfQRbhNviM&usqp=CAU'
                alt=""
                className='itemImg'></img>

              <div className='details'>
                <h2 className='itemTitle'>
                  Deepak Sharma
                </h2>
                <div className='detailItem'>
                  <span className='itemKey'>Email: </span>
                  <span className='itemValue'>deepak@gmail.com</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Phone: </span>
                  <span className='itemValue'>+91-123456789</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Address: </span>
                  <span className='itemValue'>New Delhi, India</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country: </span>
                  <span className='itemValue'>India</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={4 / 1} title="User Spending (Last 6 Months)" />
          </div>
          <div className='bottom'>
            <h2 className='title'>Last Transactions</h2>
            <Table />
          </div>
        </div>
      </div>
    </div>
  )
}
