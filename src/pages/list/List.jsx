import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './list.scss';
import DataTable from '../../components/datatable/DataTable';

export default function List() {
  return (
    <div className='list'>
      <Sidebar></Sidebar>
      <div className='listContainer'>
          <Navbar/>
          <DataTable/>
      </div>
    </div>
  )
}
