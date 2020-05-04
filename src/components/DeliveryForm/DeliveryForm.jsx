import React from 'react';
import { connect } from 'react-redux';
import { setClientData } from '../../actions';
import './DeliveryForm.css';
import InputSelect from '../InputSelect/InputSelect';
import InputField from '../InputField/InputField';

const city = {
  id: 'city',
  options: ['city 1', 'city 2', 'city 3', 'city 4', 'city 5'],
  label: 'city',
  readOnly: true,
};
const street = {
  id: 'street',
  options: ['street 1', 'street 2', 'street 3', 'street 4', 'street 5'],
  label: 'street',
  readOnly: true,
};
const municipallity = {
  id: 'municipallity',
  options: [
    'municipallity 1',
    'municipallity 2',
    'municipallity 3',
    'municipallity 4',
    'municipallity 5',
  ],
  label: 'municipallity',
  readOnly: true,
};
const parish = {
  id: 'parish',
  options: ['parish 1', 'parish 2', 'parish 3', 'parish 4', 'parish 5'],
  label: 'parish',
  readOnly: true,
};
const address = {
  id: 'address',
  options: ['address 1', 'address 2', 'address 3', 'address 4', 'address 5'],
  label: 'address',
  readOnly: true,
};

const name = {
  label: 'name',
  id: 'name-id',
  name: 'name',
  value: '',
  placeholder: 'your name',
  readOnly: false,
};
const lastName = {
  label: 'lastName',
  id: 'last-name-id',
  name: 'last-name',
  value: '',
  placeholder: 'your last name',
  readOnly: false,
};
const postalCode = {
  label: 'postal-code',
  id: 'postal-code-id',
  name: 'postal-code',
  value: '',
  placeholder: 'postal code',
  readOnly: false,
};

const DeliveryForm = (props) => {
  let clientData = {
    name: '',
    lastName: '',
    municipallity: '',
    city: '',
    parish: '',
    postalCode: '',
    street: '',
    address: '',
  };

  const handleInputChange = (e) => {
    console.log(e);
    switch (e.id) {
      case 'name-id':
        clientData.name = e.value;
        break;
      case 'last-name-id':
        clientData.lastName = e.value;
        break;
      case 'municipallity':
        clientData.municipallity = e.value;
        break;
      case 'city':
        clientData.city = e.value;
        break;
      case 'parish':
        clientData.parish = e.value;
        break;
      case 'postal-code':
        clientData.postalCode = e.value;
        break;
      case 'street':
        clientData.street = e.value;
        break;
      case 'address':
        clientData.address = e.value;
        break;
      default:
        break;
    }
    console.log(clientData);
    props.setClientData(clientData);
  };

  return (
    <div className='delivery-form'>
      <div className='delivery-form__title'>
        <h2>delivery form</h2>
      </div>
      <div className='name'>
        <InputField
          label={name.label}
          id={name.id}
          name={name.name}
          value={name.value}
          placeholder={name.placeholder}
          readOnly={name.readOnly}
          onInputChange={handleInputChange}
        />
      </div>
      <div className='last-name'>
        <InputField
          label={lastName.label}
          id={lastName.id}
          name={lastName.name}
          value={lastName.value}
          placeholder={lastName.placeholder}
          readOnly={lastName.readOnly}
          onInputChange={handleInputChange}
        />
      </div>
      <div className='city'>
        <InputSelect
          id={city.id}
          options={city.options}
          label={city.label}
          onInputChange={handleInputChange}
        />
      </div>
      <div className='street'>
        <InputSelect
          id={street.id}
          options={street.options}
          label={street.label}
          onInputChange={handleInputChange}
        />
      </div>
      <div className='postal-code'>
        <InputField
          label={postalCode.label}
          id={postalCode.id}
          name={postalCode.name}
          value={postalCode.value}
          placeholder={postalCode.placeholder}
          readOnly={postalCode.readOnly}
          onInputChange={handleInputChange}
        />
      </div>
      <div className='municipallity'>
        <InputSelect
          id={municipallity.id}
          options={municipallity.options}
          label={municipallity.label}
          onInputChange={handleInputChange}
        />
      </div>
      <div className='address-number'>
        <InputSelect
          id={address.id}
          options={address.options}
          label={address.label}
          onInputChange={handleInputChange}
        />
      </div>
      <div className='parish'>
        <InputSelect
          id={parish.id}
          options={parish.options}
          label={parish.label}
          onInputChange={handleInputChange}
        />
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  setClientData,
};

export default connect(null, mapDispatchToProps)(DeliveryForm);
