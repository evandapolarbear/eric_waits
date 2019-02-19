import React, { Fragment } from 'react';
import './styles.css';

export default ({
  banner,
  cosmeticInfo,
  finalContact,
  footer,
  generalInfo,
  header,
  implantInfo,
}) => (
  <div className='siteWrapper'>
    <div className='header'>{ header && header }</div>
    <div>{ banner && banner }</div>
    <div id='infoOne'>{ implantInfo && implantInfo }</div>
    <div id='infoTwo'>{ cosmeticInfo && cosmeticInfo }</div>
    <div id='infoThree'>{ generalInfo && generalInfo }</div>
    <div>{ finalContact && finalContact }</div>
    <div>{ footer && footer }</div>
  </div>
)
