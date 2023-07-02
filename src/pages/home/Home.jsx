import React from 'react';
import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Charts from '../../components/chart/Charts';
import Table from '../../components/table/Table';
export default function Home() {
    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer'>
                <Navbar></Navbar>
                <div className='widgets'>
                    <Widget type='user'></Widget>
                    <Widget type='order'></Widget>
                    <Widget type='earning'></Widget>
                    <Widget type='balance'></Widget>
                </div>
                <div className='charts'>
                    <Featured />
                    <Charts aspect={7/3}/>
                </div>
                <div className='listContainer'>
                    <div className='listTitle'>
                        Latest Transactions
                    </div>
                    <Table />
                </div>

            </div>
        </div>
    )
}
