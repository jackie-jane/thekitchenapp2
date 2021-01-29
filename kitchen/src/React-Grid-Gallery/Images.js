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
        randomClass = "zero";
        break;
      case 1:
        randomClass = "one";
        break;
      case 2:
        randomClass = "two";
        break;
      case 3:
        randomClass = "three";
        break;
      case 4:
        randomClass = "four";
        break;
      case 5:
        randomClass = "five";
        break;
      case 6:
        randomClass = "six";
        break;
      case 7:
        randomClass = "seven";
        break;
      case 8:
        randomClass = "eight";
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
          <img
            src={element.url}
            className={`${element.class}`}
            style={{
              position: "absolute",
              top: `${element.y}px`,
              left: `${element.x}px`
            }}>
          </img>
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