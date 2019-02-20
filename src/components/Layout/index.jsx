import React from 'react';
import './styles.css';

export default ({
  banner,
  finalContact,
  firstInfo,
  footer,
  fourthInfo,
  header,
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
    <div>{ finalContact && finalContact }</div>
    <div>{ footer && footer }</div>
  </div>
)
