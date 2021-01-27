import React, { Component } from 'react';
import './Body.css'
import React, { Component } from 'react';

class Body extends Component {
  constructor(props) {
    super(props);
    this.streamCamVideo= this.streamCamVideo.bind(this)
  }
  state = {
    video: false
  }
  //below code is from medium article by ahmed grib "https://medium.com/@a.g.stranger/how-to-create-a-react-application-to-stream-your-webcam-basic-beginner-66c792993622"
  streamCamVideo() {
    var constraints = { audio: false, video: { width: 1280, height: 720 } };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function(mediaStream) {
        var video = document.querySelector("video");
        video.srcObject = mediaStream;
        video.onloadedmetadata = function(e) {
          video.play();
        };
        this.setState({
          video: true
        })
      })
      .catch(function(err) {
        console.log(err.name + ": " + err.message);
      }); // always check for errors at the end.
  }

  render() {
    let video = this.state.video
    return (
    <>
      {
        video?
        <body className='stream'>
          { props.children }
        </body>
      :
        <body className='void'>
          {props.children}
        </body>
        }
    </>
    );
  }
}
export default Body;
// function Body(props) {
//   return (
//     <body>
//       {props.children}
//     </body>
//   );
// }


// export default Body;