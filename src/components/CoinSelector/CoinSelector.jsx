import React from 'react';
import { connect } from 'react-redux';

import { changeCoinType } from '../../actions';
import './CoinSelector.css';

const CoinSelector = (props) => {
  console.log(props.coinType);

  const handleOptionChange = (e) => {
    const coinType = e.target.value;
    props.changeCoinType(coinType);
  };

  return (
    <div className='coin-selector'>
      <div className='coin-logo coin-logo-eur'> </div>
      <div className='coin-description'>
        <span className='coin-description__radio'>
          <input
            id='usd'
            type='radio'
            name='coin'
            value='usd'
            checked={props.coinType === 'usd' ? true : false}
            onChange={handleOptionChange}
          />
          <label htmlFor='usd'>USD</label>
        </span>
        <span className='coin-description__radio'>
          <input
            id='eur'
            type='radio'
            name='coin'
            value='eur'
            checked={props.coinType === 'eur' ? true : false}
            onChange={handleOptionChange}
          />
          <label htmlFor='eur'>EUR</label>
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { coinType: state.coinType };
};
const mapDispatchToProps = {
  changeCoinType,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinSelector);
