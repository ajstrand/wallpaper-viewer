import React from "react";
class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.imageObj.url,
      title: props.imageObj.title
    };
  }
  render() {
    return (
      <div className="imageCont">
        <div>{this.state.title}</div>
        <img src={this.state.url} alt="an image" />
      </div>
    );
  }
}

export default Image;
