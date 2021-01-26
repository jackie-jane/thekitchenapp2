import React, { Component } from 'react';
import './Body.css'

function Body(props) {
  return (
    <body>
      {props.children}
    </body>
  );
}


export default Body;