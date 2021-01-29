import React from 'react';
import './Footer.css'

function Footer(props) {
  return (
    <footer>
      {props.children}
    </footer>
  );
}


export default Footer;