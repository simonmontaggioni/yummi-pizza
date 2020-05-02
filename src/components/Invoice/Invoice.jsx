import React from 'react';
import './Invoice.css';

const itemsList = [
  { name: 'margarita', price: '45', quantity: 2 },
  { name: 'peperonni', price: '50', quantity: 1 },
  { name: 'jam', price: '45', quantity: 3 },
  { name: 'special', price: '65', quantity: 1 },
  { name: 'vegan', price: '55', quantity: 2 },
  { name: 'vegan', price: '55', quantity: 2 },
  { name: 'vegan', price: '55', quantity: 2 },
];

const invoiceItemsList = itemsList.map((item) => (
  <tr class='invoice-row invoice-body-row'>
    <td class='invoice-cell invoice-body-cell'>{item.name}</td>
    <td class='invoice-cell invoice-body-cell'>
      <span>{item.price ? '$' : ''}</span>
      {item.price}
    </td>
    <td class='invoice-cell invoice-body-cell'>
      {item.quantity ? 'x' : ''}
      {item.quantity}
    </td>
    <td class='invoice-cell invoice-body-cell'>
      {item.quantity ? item.quantity * item.price : ''}
    </td>
  </tr>
));

const Invoice = () => {
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
                <span>IVA 16%</span>
                <span>$15</span>
              </div>
              <div className='delivery'>
                <span>Delivery Cost</span>
                <span>$10</span>
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
              $ 400
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

export default Invoice;
