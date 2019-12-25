//src https://codesandbox.io/s/react-table-row-table-alternate-single-row-working-hor8j

import React, { Component } from "react";

class VideoSelector extends Component {
  render() {
    let videoFrame = {
      width: "30%",
      height: "30%",
      margin: "auto",
      paddingTop: "20px"
    };

    let video;
    if (this.props.selectedRow) {
      let url = this.props.selectedRow.videos[0].embed;
      video = url;
    } else if (this.props.rows.length) {
      let url = this.props.rows[0].videos[0].embed;
      video = url;
    } else {
      video = "<h1>This is heading 1</h1>";
    }

    return (
      <div style={videoFrame} dangerouslySetInnerHTML={{ __html: video }} />
    );
  }
}

export default VideoSelector;
