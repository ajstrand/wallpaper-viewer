import React from "react";
import Image from "./Image.jsx";
const Loading = require("react-loading-animation");
import $ from "jquery";
class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ""
    };
    this.loadImages = this.loadImages.bind(this);
  }
  componentDidMount(nextProps) {
    this.loadImages();
  }
  loadImages() {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: this.props.url,
      success: function(data) {
        if (data !== null && data !== undefined) {
          this.setState({ images: data });
        } else {
          $("body").append("<p>could not get data from reddit api</p>");
        }
      }.bind(this),
      error: function(xhr, status, err) {
        console.warn(xhr.responseText);
        console.error(
          "please check your console for errors " + status + " " + err
        );
      }.bind(this)
    });
  }
  render() {
    if (
      this.state.images === null ||
      this.state.images === undefined ||
      this.state.images === ""
    ) {
      var imageArray = <Loading />;
    } else {
      var imageArray = this.state.images.map(function(imageObj, index) {
        return <Image key={index} imageObj={imageObj} />;
      });
    }
    return (
      <div className="content">
        <h3>Find new images to for wallpapers</h3>
        <h2>
          Right click an image and select "open in a new tab" to save an image
        </h2>
        {imageArray}
      </div>
    );
  }
}

export default Images;
