import React, { Component } from "react";
import ReactPlayer from "react-player";

class VideoSelector extends Component {
  render() {
    let video;

    if (this.props.selectedRow) {
      video = (
        <ReactPlayer
          url="https://youtu.be/fUpsta0bHEE"
          playing
          style={{ margin: "0 auto", marginBottom: "20px" }}
        />
      );
    } else {
      video = <h1>This is heading 1</h1>;
    }

    return <div>{video}</div>;
  }
}

export default VideoSelector;
