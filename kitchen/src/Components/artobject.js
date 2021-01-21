import React, { Component } from 'react';
import axios from 'axios'
import { } from '../data.json'

class ArtObject extends Component {
  state = {
    text: '',
    image: ''
  }

  async componentDidMount() {
    let result = await axios.get('db.json')
    let art = Math.floor(Math.random() * Math.floor(3))
    console.log(result.data[art].text)
    this.setState({
      text: result.data[art].text,
      image: result.data[art].image
    })
  }

  render() {
    let words = this.state.text
    return (
      <div>
        {words}
      </div>
    );
  }
}

export default ArtObject;