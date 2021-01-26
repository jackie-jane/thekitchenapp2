import React, { Component } from 'react';

class Images extends Component {
  state = {
    imgArray: []
  }

  componentDidMount() {
    let imageNumber = Math.floor(Math.random() * Math.floor(29))
    let newArray = this.state.imgArray.push(imageNumber);
    console.log(newArray)
    this.setState({
      imgArray: newArray
    })
    {this.addAnImg(10)}
  }
  addAnImg = (num) => {
    if (num > 1) {
      let imageNumber = Math.floor(Math.random() * Math.floor(29))
      let timer = Math.floor(Math.random() * Math.floor(30000))
      let newArray = this.state.imgArray.push(imageNumber);
      setTimeout(
        function () {
          this.setState({
            imgArray: newArray
          });
        }
          .bind(this),
        timer
      )
      { this.addAnImg(num - 1) }
    }
  }
  render() {
    console.log(this.state.imgArray)
    return (
      <>
        {/* {this.state.imgArray.map(function (element) {
          <img src={`gifs/${element}.gif`}/>
        })} */}
      </>
    );
  }
}

export default Images;