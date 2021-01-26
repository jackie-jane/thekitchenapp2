import React, { Component } from 'react';

class Images extends Component {
  state = {
    imgArray: []
  }

  componentDidMount() {
    let imageNumber = Math.floor(Math.random() * Math.floor(29))
    console.log(imageNumber)
    this.setState({
      imgArray: this.state.imgArray(imageNumber)
    })
    { this.addAnImg(10) }
  }
  addAnImg = (num) => {
    if (num > 1) {
      let imageNumber = Math.floor(Math.random() * Math.floor(29))
      let timer = Math.floor(Math.random() * Math.floor(3000))
      let newArray = this.state.imgArray.push(imageNumber)
      setTimeout(
        function () {
          this.setState({
            imgArray: newArray
          });
        }
          .bind(this),
        (timer)
      )
      { this.addAnImg(num - 1) }
    }
  }
  // componentDidUpdate(prevProps, prevState) {

  // }
  render() {
    // let url = `gifs/${this.state.img}.gif`
    // console.log(url)
    return (
      <>
      </>
      // <img src={url} />
    );
  }
}

export default Images;