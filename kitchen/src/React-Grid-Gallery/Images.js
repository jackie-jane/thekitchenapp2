import React, { Component } from 'react';
import { createArray } from '../Services/Services'
import { randomClass, iterateOnClick, toggleAudio, randomInt } from '../Services/onClickMethods'
import Audio from '../Components/Audio'
import './Images.css'

const t = this
const s = this.state

class Images extends Component {
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
    t.setState({
      userImgArray: response.newArray,
      currentImage: `gifs/${response.currentNum}.gif`,
    })
  }

  handleTrack = (e) => {
    let newClass = randomClass(8)
    t.setState({
      imageObject: {
        url: s.currentImage,
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
        class: newClass
      }
    });
  }

  handleClick = () => {
    let num = randomInt(100)
    if (num < 50) {
      { t.imageUpload() }
    } else {
      { t.audioPlay() }
    }
  }

  imageUpload = () => {
    let response = iterateOnClick(
      s.userImgArray,
      s.renderedArray,
      s.currentImage)
    t.setState({
      renderedArray: response.newFinalArray,
      userImgArray: response.newUpcomingArray,
      currentImage: `gifs/${response.newCurrent}.gif`
    })
  }

  audioPlay = () => {
    let response = toggleAudio(s.audio)
    t.setState({
      audio: response
    })
  }

  gifResize = () => {
    let imgArray = s.renderedArray
    imgArray.forEach(el => {
      let newClass = randomClass(8)
      el.class = newClass
    })
    t.setState({
      renderedArray: imgArray
    })
  }

  flipGif = () => {
    let imgArray = s.renderedArray
    imgArray.forEach(el => {
      let rotate = randomInt(360)
      el.transform = `rotate(${rotate}deg)`
    })
    t.setState({
      renderedArray: imgArray
    })
  }

  render() {
    return (
      <div
        id='userGeneratedImageContainer'
        onMouseMove={t.handleTrack}
        onClick={t.handleClick}>
        {s.audio ? <Audio></Audio> : <></>}
        {s.renderedArray.map(el =>
          <img
            src={el.url}
            className={`${el.class}`}
            style={{
              position: "absolute",
              top: `${element.y}px`,
              left: `${element.x}px`,
              transform: el.transform
            }}
          />
        )}
      </div>
    );
  }
}

export default Images;