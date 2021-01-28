import React, { Component } from 'react';
import Draggable from 'react-draggable'

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
      y: ''
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
    this.setState({
      imageObject: {
        url: `gifs/${this.state.current}.gif`,
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY
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
    let randomSize = Math.floor(Math.random() * 100)
    return (
      <section
        onMouseMove={this.handleTrack}
        onClick={this.handleClick}>
        {this.state.renderArray.map(element =>
          <Draggable>
            <img src={element.url}
              style={{
                position: "absolute",
                top: `${element.y}px`,
                left: `${element.x}px`,
                size: `${randomSize}%`
              }}
            />
          </Draggable>
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