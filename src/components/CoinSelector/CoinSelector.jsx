import React from 'react';
import './CoinSelector.css';

const CoinSelector = () => {
  return (
    <div className='coin-selector'>
      <div className='coin-logo coin-logo-eur'> </div>
      <div className='coin-description'>
        <span className='coin-description__radio'>
          <input id='usd' type='radio' name='coin' value='usd' checked />
          <label htmlFor='usd'>USD</label>
        </span>
        <span className='coin-description__radio'>
          <input id='eur' type='radio' name='coin' value='eur' />
          <label htmlFor='eur'>EUR</label>
        </span>
      </div>
    </div>
  );
};

export default CoinSelector;
