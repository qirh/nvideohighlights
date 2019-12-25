import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class VideoSelector extends Component {
  render() {

    return (
      <div>
        <ReactPlayer url='https://youtu.be/fUpsta0bHEE' playing  style={{ margin: '0 auto', marginBottom: '20px'}} />
      </div>
    );

  }


}

export default VideoSelector
