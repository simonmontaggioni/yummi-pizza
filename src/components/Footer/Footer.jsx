import React from 'react';
import FooterIcon from '../FooterIcon/FooterIcon';
import './Footer.css';

import youtubeIcon from '../../assets/static/icons/youtube.svg';
import twitterIcon from '../../assets/static/icons/twitter.svg';
import pinterestIcon from '../../assets/static/icons/pinterest.svg';
import instagramIcon from '../../assets/static/icons/instagram.svg';
import facebookIcon from '../../assets/static/icons/facebook.svg';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-container__icons'>
        <FooterIcon
          alt='youtube'
          link='http://localhost:3000'
          icon={youtubeIcon}
        />
        <FooterIcon
          alt='twitter'
          link='http://localhost:3000'
          icon={twitterIcon}
        />
        <FooterIcon
          alt='pinterest'
          link='http://localhost:3000'
          icon={pinterestIcon}
        />
        <FooterIcon
          alt='instagram'
          link='http://localhost:3000'
          icon={instagramIcon}
        />
        <FooterIcon
          alt='facebook'
          link='http://localhost:3000'
          icon={facebookIcon}
        />
      </div>
    </div>
  );
};

export default Footer;
