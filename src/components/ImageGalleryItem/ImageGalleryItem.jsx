import React,{Component} from "react";
import PropTypes from 'prop-types'
import css from "./ImageGalleryItem.module.css"


class ImageGalleryItem extends Component {
   

   static propTypes = {
     pictures: PropTypes.arrayOf(
       PropTypes.shape({
         id: PropTypes.number.isRequired,
         webformatURL: PropTypes.string.isRequired,
         tags: PropTypes.string.isRequired,
       })
     )
    }
    
  render() {
    const { pictures } = this.props;
    console.log(pictures);
      return (
        pictures.map(pictur => (
          <li className={css.ImageGalleryItem} onClick={this.onepModal} key={pictur.id}>
            <img className={css.ImageGalleryItemImage} src={pictur.webformatURL} alt={pictur.tags} width="75"
            data-img={pictur.largeImageURL} />
           </li>
        ))
      )
    
  }
};

export default ImageGalleryItem;











