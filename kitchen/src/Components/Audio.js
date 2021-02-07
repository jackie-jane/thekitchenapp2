import React, { Component } from 'react';
import { randomInt } from '../Services/Services'
import Sound from 'react-sound'

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { randomClass } from '../Services/onClickMethods';

class Audio extends Component {
  constructor(props) {
    super(props);
    state = {
      audio: false,
      fileNum: ''
    }
  }
  componentDidMount() {
    let audioFile = randomInt(7)
    this.setState({
      fileNum: audioFile
    })
  }
  render() {
    return (
      <Sound
        url={`Audio/${this.state.fileNum}.mp3`}
        playStatus={Sound.status.PLAYING}
        playFromPosition={0 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}{this.handleStatePlay}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    );
  }
}

export default Audio;