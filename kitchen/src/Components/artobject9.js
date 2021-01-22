import React, { Component } from 'react';
import axios from 'axios'
import Draggable from 'react-draggable';

const randomPosition = {
  position: 'absolute',
  top: Math.floor(Math.random() * (Math.random() *1000)),
  left: Math.floor(Math.random() * (Math.random() *1000)),
}

class ArtObjectNine extends Component {
  state = {
    text: '',
    image: ''
  }

  async componentDidMount() {
    let result = await axios.get('db.json')
    let art = Math.floor(Math.random() * Math.floor(7))
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
        <img
          src={imgUrl}
          style={randomPosition}
          height="300"
          width="500" />
      </Draggable>
    )
  }
}

export default ArtObjectNine;