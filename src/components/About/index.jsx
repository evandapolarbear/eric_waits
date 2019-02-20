import React from 'react';
import './styles.css';

export default ({ centralText }) => (
  <div className='aboutContainer'>
    <div className='imagePlaceHolder'>
      <h1>HEAD SHOT</h1>
      <h1>PLACEHOLDER</h1>
    </div>
    <div className='aboutText'>
      <h3>{ centralText }</h3>
    </div>
  </div>
)
