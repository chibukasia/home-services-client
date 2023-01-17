import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function ServiceForm() {
  const [service, setService] = useState({
    service_name: '',
    description: ''
  })
  return (
    <div className='service-form'>
      <form>
        <label htmlFor='service_name'> Service Name</label>
        <input type={'text'} name='service_name' />
        <label htmlFor='description'> Description</label>
        <textarea cols={12} name='description' />
        <input type={'submit'} vale='Submit' />
      </form>
    </div>
  );
}

export default ServiceForm
