import React from 'react';
import './styles.css';

export default ({ centralText, title }) => (
  <div className='aboutContainer'>
    <div className='headShotImg' />
    <div className='aboutText'>
      <h2> { title }</h2>
      <h3>{ centralText }</h3>
    </div>
  </div>
)
