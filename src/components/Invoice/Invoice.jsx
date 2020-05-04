import React from 'react';
import { connect } from 'react-redux';
import './Invoice.css';

const Invoice = (props) => {
  const iva = 16;
  const delivery = 10;

  const calculateIva = (subTotal, iva) => {
    return (subTotal * iva) / 100;
  };

  const calculateSubTotal = (cartItems) => {
    let subTotal = 0;
    if (cartItems) {
      for (let item of cartItems) {
        subTotal += item.price;
      }
    }
    return subTotal;
  };

  const calculateTotal = (subTotal, iva, delivery) => {
    return subTotal + iva + delivery;
  };

  let invoiceItems = [
    { id: 'pizza-1', name: 'margarita', price: 45, quantity: 0 },
    { id: 'pizza-2', name: 'stagioni', price: 45, quantity: 0 },
    { id: 'pizza-3', name: 'mexicana', price: 45, quantity: 0 },
    { id: 'pizza-4', name: 'primavera', price: 45, quantity: 0 },
    { id: 'pizza-5', name: 'pastorella', price: 45, quantity: 0 },
    { id: 'pizza-6', name: 'hawaiana', price: 45, quantity: 0 },
    { id: 'pizza-7', name: 'napolitana', price: 45, quantity: 0 },
    { id: 'pizza-8', name: 'la marinara', price: 45, quantity: 0 },
  ];

  const cartItems = props.cartItems;
  for (let cartItem of cartItems) {
    let itemIndex = invoiceItems.findIndex(
      (invoiceItem) => invoiceItem.id === cartItem.id
    );
    invoiceItems[itemIndex].quantity += 1;
  }

  const invoiceItemsList = invoiceItems.map((item) => {
    if (item) {
      return (
        <tr class='invoice-row invoice-body-row'>
          <td class='invoice-cell invoice-body-cell'>
            {item.quantity > 0 ? item.name : ''}
          </td>
          <td class='invoice-cell invoice-body-cell'>
            <span>{item.quantity > 0 ? '$' + item.price : ''}</span>
          </td>
          <td class='invoice-cell invoice-body-cell'>
            {item.quantity > 0 ? 'x' + item.quantity : ''}
          </td>
          <td class='invoice-cell invoice-body-cell'>
            {item.quantity ? item.quantity * item.price : ''}
          </td>
        </tr>
      );
    } else
      return (
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );
  });

  return (
    <div>
      <table class='invoice-table'>
        <caption className='invoice-title'>
          <h2>Invoice details</h2>
        </caption>
        <thead class='invoice-header'>
          <td class='invoice-cell invoice-header-cell'>Item</td>
          <td class='invoice-cell invoice-header-cell'>Price</td>
          <td class='invoice-cell invoice-header-cell'>qty</td>
          <td class='invoice-cell invoice-header-cell'>subtotal</td>
        </thead>
        <tbody className='invoice-body'>{invoiceItemsList}</tbody>
        <tfoot className='invoice-footer'>
          <tr class='invoice-row invoice-tax'>
            <td class='invoice-cell' colspan='4'>
              <div className='tax'>
                <span>IVA {iva}%</span>
                <span>
                  $ {calculateIva(calculateSubTotal(props.cartItems), iva)}
                </span>
              </div>
              <div className='delivery'>
                <span>Delivery Cost</span>
                <span>$ {delivery}</span>
              </div>
            </td>
          </tr>
          <tr className='invoice-total'>
            <td class='empty-cell'></td>
            <td class='invoice-cell invoice-cell__total-title br-bottom-left '>
              Total
            </td>
            <td
              class='invoice-cell invoice-cell__total-amount br-bottom'
              colspan='2'
              rowSpan='2'
            >
              $
              {calculateTotal(
                calculateSubTotal(props.cartItems),
                calculateIva(calculateSubTotal(props.cartItems), iva),
                delivery
              )}
            </td>
          </tr>
          <tr>
            <td className='invoice-cell'></td>
            <td className='invoice-cell'></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps, null)(Invoice);
