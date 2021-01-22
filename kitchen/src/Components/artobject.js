import React, { Component } from 'react';
import axios from 'axios'
import Draggable from 'react-draggable';

class ArtObject extends Component {
  state = {
    text: '',
    image: ''
  }

  async componentDidMount() {
    let result = await axios.get('db.json')
    let art = Math.floor(Math.random() * Math.floor(3))
    console.log(result.data[art].image)
    this.setState({
      text: result.data[art].text,
      image: result.data[art].image
    })
  }

  render() {
    let words = this.state.text
    let imgUrl = this.state.image
    return (
      <Draggable>
        <img src={imgUrl} height="300" width="500" />
      </Draggable>
    )
  }
}

export default ArtObject;