import React, { Component } from 'react';
import Axios from 'axios'
import ReactTimeout from 'react-timeout'

class BackgroundImageBuilder extends Component {
  state = {
    backgroundImgArray: [],
    possibleImages: [],
    counter: 0
  }
  async componentDidMount() {
    let result = await Axios('./db.json')
    console.log(result.data)
    { this.imageScheduler() }
    this.setState({
      possibleImages: result.data
    })
  }
    imageFinder = () => {
      let imgNum = Math.floor(Math.random() * 44)
      let currentNum = []
      let ongoingArray = this.state.backgroundImgArray
      this.state.possibleImages.forEach(element => {
        if (imgNum !== 0 && imgNum === this.state.possibleImages.number) {
          let ind = this.state.possibleImages.indexOf(element)
          currentNum = element.image
          { this.imageScheduler() }
          this.setState({
            backgroundImgArray: ongoingArray.concat(currentNum)
          })
        } else {
          currentNum = ['gifs/32.gif']
          { this.imageScheduler() }
          this.setState({
            backgroundImgArray: ongoingArray.concat(currentNum)
          })
        }
      })
    }
    imageScheduler = () => {
      let currentCount = this.state.counter
      if (this.state.counter < 21) {
        setTimeout(this.imageFinder(), 15000)
        this.setState({
          counter: currentCount + 1
        })
      } else {
        console.log('count finished')
      }
  }

  render() {
    console.log(this.state.backgroundImgArray)
    return (
      <div>
      </div>
    );
  }
}

export default BackgroundImageBuilder;