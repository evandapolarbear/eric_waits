import React from 'react';
import cx from 'class-names';
import './styles.css'

export default ({ reverse, text, children, infoTitle, sectionNum }) => (
  <div>
    <div className={cx('infoSectionTextContainer', { reverse })}>
      <div className='infoSectionText'>
        <h1>{ infoTitle }</h1>
        <h3>{ text }</h3>
      </div>
      <div className={cx('infoSectionImage', {
          imgOne: sectionNum === 1,
          imgTwo: sectionNum === 2,
          imgThree: sectionNum === 3,
        })} />
    </div>
    <div className='infoButtonContainer'>
      { children }
    </div>
  </div>
)
