import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from "./Searchbar.module.css";


// console.log(css);
class Searchbar extends Component {
    state = {
      imgName: "",
  }
  
   static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  
    hendleNameChange = (e) => {
      this.setState({ imgName: e.target.value.toLowerCase() });
    }

    onGetImgName = (e) => {
      e.preventDefault();
      if (this.state.imgName.trim() === "") {
        alert("Введите имя запроса")
        return;
      }

      this.props.onSubmit(this.state.imgName);
  
      this.setState({ imgName: " " });
    }
   
    render() {
        const { imgName } = this.state;

    return (
        <header className={css.searchbar}>
        <form onSubmit={this.onGetImgName} className={css.searchbarForm}>
        <button type="submit" className={css.searchFormButton}>
        <span >Search</span>
        </button>
        <input
        onChange={this.hendleNameChange}
        className={css.searchFormInput}
        type="text"
        value={imgName}          
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        />
        </form>
        </header>
        )
    }
}

export default Searchbar;