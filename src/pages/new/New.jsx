import React, { useState } from 'react';
import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

export default function New({ inputs, title }) {

  const [file, setFile] = useState('');
  console.log(file);

  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h2>{title}</h2>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img
              src={file !== ''?URL.createObjectURL(file) :'https://st3.depositphotos.com/25673058/32522/v/600/depositphotos_325222682-stock-illustration-circle-outline-camera-icon-with.jpg'}
              alt='upload picture' />
          </div>
          <div className='right'>
            <form>

              <div className='formInput'>
                <label htmlFor='file'>Upload Picture <DriveFolderUploadIcon className='icon' /> </label>
                <input 
                id='file' 
                type='file'  
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: 'none' }} />
              </div>

              {inputs.map((input) => {
                return (
                  <div className='formInput' key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                )
              })}

              <button>Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}
