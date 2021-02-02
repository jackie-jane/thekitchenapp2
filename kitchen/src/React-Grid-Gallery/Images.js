import React, { Component } from 'react';
import Background from '../Layout/Background'
import Body from '../Layout/Body'
import Footer from '../Layout/Footer'
import Audio from '../Components/Audio'
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
    },
    audio: false
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
    let randomInt = Math.floor(Math.random() * 100)
    if (randomInt < 50) {
      { this.imageUpload() }
    } else {
      { this.audioPlay() }
    }
  }
  imageUpload = () => {
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
  audioPlay = () => {
    if (this.state.audio === false) {
      this.setState({
        audio: true
      })
    } else {
      this.setState({
        audio: false
      })
    }
  }
  render() {
    return (
      <>
        <Body>
          <section
            onMouseMove={this.handleTrack}
            onClick={this.handleClick}>
            {this.state.audio ? <Audio></Audio> : <></>}
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
            <Background></Background>
          </section>
        </Body>
        <Footer>
        </Footer>
      </>
    );
  }
}

export default Images;