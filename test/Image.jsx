import React from 'react';
class Image extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text:props.item
    }
  }
    render() {
        return(
          <div>
            {this.state.text}
        </div>
      );
    }
};

export default Image;
