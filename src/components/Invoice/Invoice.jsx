import React from 'react';
import { connect } from 'react-redux';
import { coinFactor, coinSymbol } from '../../utils';
import './Invoice.css';

const Invoice = (props) => {
  const iva = 16;
  const delivery = coinFactor(props.coinType, 10);

  const calculateIva = () => {
    return (calculateSubTotal() * 16) / 100;
  };

  const calculateSubTotal = () => {
    let subTotal = 0;
    if (props.cartItems) {
      for (let item of props.cartItems) {
        subTotal += item.price;
      }
    }
    return coinFactor(props.coinType, subTotal);
  };

  const calculateTotal = () => {
    const total =
      calculateSubTotal() +
      calculateIva() +
      (calculateIva() > 0 ? delivery : 0);
    return total.toFixed(2);
  };

  let invoiceItems = [
    { id: 'pizza-1', name: 'margarita', price: 0, quantity: 0 },
    { id: 'pizza-2', name: 'stagioni', price: 0, quantity: 0 },
    { id: 'pizza-3', name: 'mexicana', price: 0, quantity: 0 },
    { id: 'pizza-4', name: 'primavera', price: 0, quantity: 0 },
    { id: 'pizza-5', name: 'pastorella', price: 0, quantity: 0 },
    { id: 'pizza-6', name: 'hawaiana', price: 0, quantity: 0 },
    { id: 'pizza-7', name: 'napolitana', price: 0, quantity: 0 },
    { id: 'pizza-8', name: 'la marinara', price: 0, quantity: 0 },
  ];

  const cartItems = props.cartItems;
  for (let cartItem of cartItems) {
    let itemIndex = invoiceItems.findIndex(
      (invoiceItem) => invoiceItem.id === cartItem.id
    );
    invoiceItems[itemIndex].quantity += 1;
    invoiceItems[itemIndex].price = cartItem.price;
  }

  const invoiceItemsList = invoiceItems.map((item) => {
    if (item.quantity > 0) {
      return (
        <tr key={item.name} className='invoice-row invoice-body-row'>
          <td className='invoice-cell invoice-body-cell'>
            {item.quantity > 0 ? item.name : ''}
          </td>
          <td className='invoice-cell invoice-body-cell'>
            <span>
              {item.quantity > 0
                ? `${coinSymbol(props.coinType)}${coinFactor(
                    props.coinType,
                    item.price
                  )}`
                : ''}
            </span>
          </td>
          <td className='invoice-cell invoice-body-cell'>
            {item.quantity > 0 ? 'x' + item.quantity : ''}
          </td>
          <td className='invoice-cell invoice-body-cell'>
            {item.quantity
              ? item.quantity * coinFactor(props.coinType, item.price)
              : ''}
          </td>
        </tr>
      );
    } else return null;
  });

  const invoiceRows = () => {
    let rows = [];
    const result = invoiceItemsList.filter((item) => item !== null);
    for (let index = 0; index < 10; index++) {
      if (result[index]) {
        rows.push(result[index]);
      } else {
        rows.push(
          <tr key={index} className='invoice-row invoice-body-row'>
            <td className='invoice-cell invoice-body-cell'></td>
            <td className='invoice-cell invoice-body-cell'></td>
            <td className='invoice-cell invoice-body-cell'></td>
            <td className='invoice-cell invoice-body-cell'></td>
          </tr>
        );
      }
    }
    return rows;
  };

  return (
    <div>
      <table className='invoice-table'>
        <caption className='invoice-title'>
          <h2>Invoice details</h2>
        </caption>
        <thead className='invoice-header'>
          <tr className='invoice-row invoice-body-row'>
            <th className='invoice-header-cell'>Item</th>
            <th className='invoice-header-cell'>Price</th>
            <th className='invoice-header-cell'>qty</th>
            <th className='invoice-header-cell'>subtotal</th>
          </tr>
        </thead>
        <tbody className='invoice-body'>
          <tr className='invoice-row invoice-body-row'>
            <td className='invoice-cell invoice-body-cell'></td>
            <td className='invoice-cell invoice-body-cell'></td>
            <td className='invoice-cell invoice-body-cell'></td>
            <td className='invoice-cell invoice-body-cell'></td>
          </tr>
          {invoiceRows()}
        </tbody>
        <tfoot className='invoice-footer'>
          <tr className='invoice-row invoice-tax'>
            <td className='invoice-cell' colSpan='4'>
              <div className='tax'>
                <span>IVA {iva}%</span>
                <span>
                  {coinSymbol(props.coinType)}
                  {calculateIva()}
                </span>
              </div>
              <div className='delivery'>
                <span>Delivery Cost</span>
                <span>
                  {coinSymbol(props.coinType)}
                  {calculateIva() > 0 ? delivery : 0}
                </span>
              </div>
            </td>
          </tr>
          <tr className='invoice-total'>
            <td className='empty-cell'></td>
            <td className='invoice-cell invoice-cell__total-title br-bottom-left '>
              Total
            </td>
            <td
              className='invoice-cell invoice-cell__total-amount br-bottom'
              colSpan='2'
              rowSpan='2'
            >
              {coinSymbol(props.coinType)}
              {calculateTotal()}
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
    coinType: state.coinType,
  };
};

export default connect(mapStateToProps, null)(Invoice);
