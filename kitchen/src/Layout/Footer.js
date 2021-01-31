import React, { Component } from 'react';

class Footer extends Component {

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  render() {
    return (
      <footer
        onMouseOver={this.scrollToTop()}>
      </footer>
    );
  }
}

export default Footer;