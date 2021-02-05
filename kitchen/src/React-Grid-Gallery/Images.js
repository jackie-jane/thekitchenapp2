import React, { Component } from 'react';
import { createArray, randomInt } from '../Services/Services'
import { randomClass, iterateOnClick, toggleAudio } from '../Services/onClickMethods'
import Audio from '../Components/Audio'
import './Images.css'
import Background from '../Layout/Background';

class Images extends Component {
  constructor() {
    super();
  }
  state = {
    userImgArray: [],
    renderedArray: [],
    currentImage: '',
    imageObject:
    {
      url: '',
      x: '',
      y: '',
      class: '',
      transform: 'none'
    },
    audio: false
  }

  componentDidMount() {
    let response = createArray(100)
    this.setState({
      userImgArray: response.newArray,
      currentImage: `gifs/${response.currentNum}.gif`,
    })
  }

  handleTrack = (e) => {
    let newClass = randomClass(8)
    this.setState({
      imageObject: {
        url: this.state.currentImage,
        x: e.pageX,
        y: e.pageY,
        class: newClass
      }
    });
  }

  handleClick = () => {
    let num = randomInt(100)
    if (num < 50) {
      { this.imageUpload() }
    } else {
      { this.audioPlay() }
    }
  }

  imageUpload = () => {
    let response = iterateOnClick(
      this.state.imageObject,
      this.state.renderedArray,
      this.state.userImgArray)
    this.setState({
      renderedArray: response.newFinalArray,
      userImgArray: response.newUpcomingArray,
      currentImage: `gifs/${response.newCurrent}.gif`
    })
  }

  audioPlay = () => {
    let response = toggleAudio(this.state.audio)
    this.setState({
      audio: response
    })
  }

  gifResize = () => {
    let imgArray = this.state.renderedArray
    imgArray.forEach(el => {
      let newClass = randomClass(8)
      el.class = newClass
    })
    this.setState({
      renderedArray: imgArray
    })
  }

  flipGif = () => {
    let imgArray = this.state.renderedArray
    imgArray.forEach(el => {
      let rotate = randomInt(360)
      el.transform = `rotate(${rotate}deg)`
    })
    this.setState({
      renderedArray: imgArray
    })
  }

  render() {
    return (
      <div
        id='userGeneratedImageContainer'
        onMouseMove={this.handleTrack}
        onClick={this.handleClick}>
        <Background/>
        {this.state.audio ? <Audio></Audio> : <></>}
        {this.state.renderedArray.map(el =>
          <img
            src={el.url}
            className={`${el.class}`}
            style={{
              position: "absolute",
              top: `${el.y}px`,
              left: `${el.x}px`,
              transform: el.transform
            }}
          />
        )}
      </div>
    );
  }
}

export default Images;