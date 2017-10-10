import React from 'react';
import $ from 'jquery';
import Images from './Images.jsx';

class App extends React.Component {
    constructor() {
   super();
   this.state= {
       title:'',
       post:''
   }
    }
    componentDidMount (){
      document.title="View wallpapers"
    }
    render() {
        return (
            <div className="container">
                <Images url="api/images"></Images>
            </div>
        );
    }
};

export default App;
