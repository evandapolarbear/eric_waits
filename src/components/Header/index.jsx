import React from 'react';
import './styles.css';

export default ({ children, headers, title, subTitleOne, subTitleTwo }) => (
  <div className='headerContainer'>
    <div>
      <div>{ title }</div>
      <div>{ subTitleOne }</div>
      <div>{ subTitleTwo }</div>
    </div>
    <div className='linkDivs'>
      {headers.map((text, idx) =>
        <a href={`#info${idx + 1}`} className='internalLink'>{ text }</a>
      )}
      { children }
    </div>
  </div>
)
