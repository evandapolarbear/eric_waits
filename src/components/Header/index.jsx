import React, { Fragment } from 'react';
import './styles.css';

export default ({ children }) => (
  <Fragment>
    <div>
      <h1>DR. Eric Waits</h1>
      <h3>DMD</h3>
    </div>
    <div className='linkDivs'>
      <a href='#infoOne' className='internalLink'>Implants</a>
      <a href='#infoTwo' className='internalLink'>Cosmetics</a>
      <a href='#infoThree' className='internalLink'>General</a>
      { children }
    </div>
  </Fragment>
)
