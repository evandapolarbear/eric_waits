import React from 'react';
import './styles.css';

export default ({ rateUs, yelp, google, yelpUrl, googleUrl }) => (
  <div className='rateFooterContainer'>
    <div>{ rateUs }</div>
    <div className='rateFooterButtons'>
      <a href={ yelpUrl } className='footerLinkTag'>
        <div className='footerRateButton'>{ yelp }</div>
      </a>
      <a href={googleUrl} className='footerLinkTag'>
        <div className='footerRateButton'>{ google }</div>
      </a>
    </div>
  </div>
)
