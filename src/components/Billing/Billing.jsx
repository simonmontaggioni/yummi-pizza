import React from 'react';
import './Billing.css';
import Invoice from '../Invoice/Invoice';
import DeliveryForm from '../DeliveryForm/DeliveryForm';

class Billing extends React.Component {
  constructor(props) {
    super(props);
    this.handleFlipBackClick = this.handleFlipBackClick.bind(this);
    this.handleFlipFrontClick = this.handleFlipFrontClick.bind(this);
    this.state = { rotate: 'flip-front' };
  }
  handleFlipBackClick() {
    this.setState({ rotate: 'flip-back' });
  }
  handleFlipFrontClick() {
    this.setState({ rotate: 'flip-front' });
  }

  render() {
    return (
      <div className='billing flip-card'>
        <div className={`flip-card-inner ${this.state.rotate}`}>
          <div className='billing-front flip-card-front'>
            <div className='invoice-details'>
              <Invoice />
            </div>
            <div>
              <button
                className='invoice__payment-button'
                onClick={this.handleFlipBackClick}
              >
                Process order
              </button>
            </div>
          </div>
          <div className='billing-rear flip-card-back'>
            <div className='form'>
              <DeliveryForm />
            </div>
            <div className='buttons-group'>
              <button
                className='invoice__payment-button--check'
                onClick={this.handleFlipFrontClick}
              >
                Check Order
              </button>
              <button
                className='invoice__payment-button'
                onClick={this.handleFlipFrontClick}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Billing;
