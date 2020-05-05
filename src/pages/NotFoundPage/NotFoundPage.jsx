import React from 'react';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className='not-found-page'>
      <div className='not-found-page__banner'>
        <Banner title='Oops!!! here is not a pizza' buttonText={'go back'} />
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
