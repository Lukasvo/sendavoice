import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import './Amount.css';

const Amount = () => {
  const [amount, setAmount] = useState(Number);

  const handleSubmit = event => {
    event.preventDefault();
    console.log('TODO: ', amount);
  };

  return (
    <div className='amount'>
      <h2>Select the amount you want to donate</h2>
      <p>
        <strong>Donation amount (min.1€)</strong>
      </p>
      <form onSubmit={e => handleSubmit(e)}>
        <div className='form'>
          <TextField
            placeholder='1€'
            type='number'
            onChange={e => setAmount(e.target.value)}
            required={true}
            variant='outlined'
          />
          <Button type='submit'>Donate !</Button>
        </div>
      </form>
    </div>
  );
};

export default Amount;
