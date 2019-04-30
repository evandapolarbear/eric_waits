import React from 'react';
import './styles.css';

export default ({ rateUs, yelp, google }) => (
  <div className='rateFooterContainer'>
    <div>{ rateUs }</div>
    <div className='rateFooterButtons'>
      <div className='footerRateButton'>{ yelp }</div>
      <div className='footerRateButton'>{ google }</div>
    </div>
  </div>
)
