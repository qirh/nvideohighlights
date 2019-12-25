//src https://codesandbox.io/s/react-table-row-table-alternate-single-row-working-hor8j

import React, { Component } from "react";

class VideoSelector extends Component {
  render() {
    let video;

    if (this.props.selectedRow) {
      let url = this.props.selectedRow.videos[0].embed
      let regex = /.+<iframe.*?src='(.*?)'/;
      let src = regex.exec(url)[1];

      console.log(src);
      video = (
        <div
          style={{ margin: "0 auto", marginBottom: "20px" }}
        >
          {this.props.selectedRow.videos[0].embed}
        </div>
      );
    } else {
      video = <h1>This is heading 1</h1>;
    }

    return <div dangerouslySetInnerHTML={__html: {video}} />
  }
}

export default VideoSelector;
