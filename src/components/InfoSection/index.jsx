import React from 'react';
import './styles.css'

export default ({ reverse, text, image, children, infoTitle }) => (
  <div>
    <div className={!reverse? 'infoSectionTextContainer' : 'infoSectionTextContainerReverse'}>
      <div className='infoSectionText'>
        <h1>{ infoTitle }</h1>
        <h3>{ text }</h3>
      </div>
      <div className='infoSectionImage'>
        { image }
      </div>
    </div>
    <div className='infoButtonContainer'>
      { children }
    </div>
  </div>
)
