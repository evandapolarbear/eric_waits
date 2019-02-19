import React from 'react';
import './styles.css'

export default ({ reverse, text, image, children }) => (
  <div>
    <div className={!reverse? 'infoSectionTextContainer' : 'infoSectionTextContainerReverse'}>
      <div className='infoSectionText'>
        { text }
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
