import React, { Component } from 'react';
import './Images.css'
class Images extends Component {
  state = {
    imgArray: [],
    renderArray: [],
    current: '',
    imageObject: {
      url: '',
      x: '',
      y: ''
    }
  }
  componentDidMount() {
    let newArray = Array.from({ length: 30 },
      () => Math.floor(Math.random() * 30))
    console.log(newArray)
    let newCurrent = newArray[0]
    newArray.shift()
    newArray.push(newCurrent)
    this.setState({
      imgArray: newArray,
      current: `gifs/${newCurrent}.gif`,
    })
  }
  handleTrack = (e) => {
    this.setState({
      imageObject: {
        url: this.state.current,
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY
      }
    });
  }
  handleClick = () => {
    let imageToBeRendered = this.state.imageObject
    let objectToArray = [imageToBeRendered]
    let newArray = this.state.renderArray.concat(objectToArray)
    let newCurrent = this.state.imgArray[0]
    let updatedImgArray = this.state.imgArray.shift()
    updatedImgArray = updatedImgArray.push(newCurrent)
    newArray.shift()
    newArray.push(newCurrent)
    this.setState({
      renderArray: newArray,
      imgArray: updatedImgArray,
      current: newCurrent
    })
  }
  render() {
    return (
      <section
        onMouseMove={this.handleTrack}
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