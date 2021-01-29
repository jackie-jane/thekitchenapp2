import React, { Component } from 'react';

import './Images.css'
class Images extends Component {
  state = {
    imgArray: [],
    renderArray: [],
    current: '',
    imageObject:
    {
      url: '',
      x: '',
      y: '',
      class: ''
    }
  }
  componentDidMount() {
    let newArray = Array.from({ length: 100 },
      () => Math.floor(Math.random() * 45))
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
    let randomClass = Math.floor(Math.random() * 8)
    switch (randomClass) {
      case 0:
        day = "zero";
        break;
      case 1:
        day = "one";
        break;
      case 2:
        day = "two";
        break;
      case 3:
        day = "three";
        break;
      case 4:
        day = "four";
        break;
      case 5:
        day = "five";
        break;
      case 6:
        day = "six";
        break;
      case 7:
        day = "seven";
        break;
      case 8:
        day = "eight";
    }
    this.setState({
      imageObject: {
        url: `gifs/${this.state.current}.gif`,
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
        class: randomClass
      }
    });
  }
  handleClick = () => {
    let imageToBeRendered = this.state.imageObject
    let objectToArray = [imageToBeRendered]
    let newArray = this.state.renderArray.concat(objectToArray)
    let newCurrent = this.state.imgArray.shift()
    let updatedImgArray = this.state.imgArray
    updatedImgArray.shift()
    updatedImgArray.push(newCurrent)
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
        {this.state.renderArray.map(element =>
          <div
            className={`${element.randomClass}`}
            style={{
              top: `${element.y}px`,
              left: `${element.x}px`,
              background: `url(${element.url})`,
              backgroundSize: 'cover'
            }}
          />
        )}
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