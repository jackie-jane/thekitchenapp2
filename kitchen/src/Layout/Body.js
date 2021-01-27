import React from 'react';
import './Body.css'

function Body(props) {
  return (
    <body className='void'>
      {props.children}
    </body>
  );
}


export default Body;