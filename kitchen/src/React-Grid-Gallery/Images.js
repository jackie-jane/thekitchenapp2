import React, { Component } from 'react';
import './Images.css'
class Images extends Component {
  state = {
    imgArray: [],
    current: '',
    x: '',
    y: ''
  }
  componentDidMount() {
    let newArray = Array.from({ length: 30 },
      () => Math.floor(Math.random() * 30))
    console.log(newArray)
    this.setState({
      imgArray: newArray
    })
  }
  handleClick = (e) => {
    this.setState({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY
    });
  }
  render() {
    return (
      <section
        onClick={this.handleClick}>
      </section>
    );
  }
}

export default Images;

  //   let imageNumber = Math.floor(Math.random() * Math.floor(29))
  //   let newArray = this.state.imgArray.push(imageNumber);
  //   console.log(newArray)
  //   this.setState({
  //     imgArray: newArray
  //   })
  //   {this.addAnImg(10)}
  // }
  // addAnImg = (num) => {
  //   if (num > 1) {
  //     let imageNumber = Math.floor(Math.random() * Math.floor(29))
  //     let timer = Math.floor(Math.random() * Math.floor(30000))
  //     let newArray = this.state.imgArray.push(imageNumber);
  //     setTimeout(
  //       function () {
  //         this.setState({
  //           imgArray: newArray
  //         });
  //       }
  //         .bind(this),
  //       timer
  //     )
  //     { this.addAnImg(num - 1) }
  //   }
  // }