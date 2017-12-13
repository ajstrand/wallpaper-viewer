import React from "react";
import $ from "jquery";
import Images from "./Images.jsx";

class App extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    document.title = "View wallpapers";
  }
  render() {
    return (
      <div className="container">
        <Images url="api/images" />
      </div>
    );
  }
}

export default App;
