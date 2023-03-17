import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar"
import ImageGallery from "./ImageGallery/ImageGallery";
import css from "./App.module.css"



 class App extends Component {
    state = {
      imgName: "",
   }

   onGetImgName = (imgName) => {
     this.setState({ imgName });
   }
  
   render() {
     
     const { imgName } = this.state;

     return (
      <div className={css.app}>
      <Searchbar onSubmit={this.onGetImgName} />
      <ImageGallery value={imgName} />
      </div>
    )
  }
}


export default App;