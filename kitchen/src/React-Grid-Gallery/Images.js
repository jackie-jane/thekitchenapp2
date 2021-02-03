import React, { Component } from 'react';
import { createArray } from '../Services/Services'
import { randomClass, iterateOnClick, toggleAudio } from '../Services/onClickMethods'
import Background from '../Layout/Background'
import Body from '../Layout/Body'
import Footer from '../Layout/Footer'
import Audio from '../Components/Audio'
import './Images.css'
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
      class: ''
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
    let newClass = randomClass()
    this.setState({
      imageObject: {
        url: this.state.currentImage,
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
        class: newClass
      }
    });
  }

  handleClick = () => {
    let randomInt = Math.floor(Math.random() * 100)
    if (randomInt < 50) {
      { this.imageUpload() }
    } else {
      { this.audioPlay() }
    }
  }

  imageUpload = () => {
    const s = this.state
    let response = iterateOnClick(s.userImgArray, s.renderedArray, s.currentImage
    )
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

  render() {
    let t = this
    let s = this.state
    return (
      <>
        <Body>
          <section
            onMouseMove={t.handleTrack}
            onClick={t.handleClick}>
            {s.audio ? <Audio></Audio> : <></>}
            {s.renderedArray.map(element =>
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
            <Background></Background>
          </section>
        </Body>
      </>
    );
  }
}

export default Images;