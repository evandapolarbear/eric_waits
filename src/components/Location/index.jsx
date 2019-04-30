import React, { Fragment } from 'react';
import './styles.css';

export default ({ children, title, subTitleOne, subTitleTwo, mapUrl }) => (
  <Fragment>
    <div className='locationContainer'>
      <div className='locationContainerTop'>
        <a
          href={mapUrl}
          target='_blank'
          rel="noopener noreferrer"
          >
            <div className='mapImg'/>
        </a>
      </div>
      <div>
        <h1>{ title }</h1>
        <h2>{ subTitleOne }</h2>
        <h2>{ subTitleTwo }</h2>
      </div>
    </div>
    <div className='bttnContainer'>
      { children }
    </div>
  </Fragment>
)
