import React from 'react';
import './styles.css';

export default ({
  banner,
  fifthInfo,
  finalContact,
  firstInfo,
  footer,
  fourthInfo,
  header,
  rateFooter,
  secondInfo,
  thirdInfo,
}) => (
  <div className='siteWrapper'>
    <div>{ header && header }</div>
    <div>{ banner && banner }</div>
    <div id='info1'>{ firstInfo && firstInfo }</div>
    <div id='info2'>{ secondInfo && secondInfo }</div>
    <div id='info3'>{ thirdInfo && thirdInfo }</div>
    <div id='info4'>{ fourthInfo && fourthInfo }</div>
    <div id='info5'>{ fifthInfo && fifthInfo }</div>
    <div>{ finalContact && finalContact }</div>
    <div>{ footer && footer }</div>
    <div>{ rateFooter }</div>
  </div>
)
