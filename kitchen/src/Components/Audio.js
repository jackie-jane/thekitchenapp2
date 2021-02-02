import React, { Component } from 'react';
import Sound from 'react-sound'

class Audio extends Component {

  render() {
    return (
      <Sound
      url="Audio/testAudio.mp3"
      playStatus={Sound.status.PLAYING}
      playFromPosition={0 /* in milliseconds */}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
    />
    );
  }
}

export default Audio;