import React, { Component } from "react";
import PropTypes from 'prop-types';
import NewsApi from "pixabay-api/pixabay-api";
import Loader from "components/Loader/Loader";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import css from "./ImageGallery.module.css";


const objNews = new NewsApi();


class ImageGallery extends Component {
    state = {
        img: [],
        status: "idle",
        page: 1,
        showModal: false,
        modalImg: null,
        total: 0,
    };

    
    static propTypes = {
        value: PropTypes.string.isRequired,
    }

    componentDidUpdate(prevProps, prevState) {


         if (prevProps.value !== this.props.value) {
            objNews.resetPage()   
            this.setState({ status: "pending", img:[]});
    
            objNews.inputValue = this.props.value;         
             objNews.getNews()
                 .then(pic => this.setState({
                     img: [...pic.hits],
                     status: "resolved",
                     total: pic.totalHits,
                 })) 
        
        }
     

        if (prevState.page !== this.state.page) {
              
            this.setState({ status: "loading" })
            
            objNews.getNews()
            .then(pic => this.setState(prevState => ({
                    img: [...prevState.img, ...pic.hits],
                    status: "resolded",
                })));
        }
   
    }
    

    onGetImgPage = () => {
        this.setState(prevState => ({
            page: prevState.page + 1
        }))
    
    }
    
    onepModal = (e) => {
        if (e.target.nodeName === "IMG") {
        const { img } = e.target.dataset;
        this.setState({ showModal: true, modalImg: img });
     }
    }

    closeModal = (e) => {
        this.setState({ showModal: false });
    }

    render() {
        const { img, status, page, showModal, total, modalImg } = this.state;   
        
        if (status === "idle") {
            return (<p className={css.enterWord}>Введите слово</p>);
        }
        if (status === "pending") {
            return (<div className={css.loaderBlock}><Loader /></div>);
        }
        if (img.length === 0) {
            return (<p className={css.error}>Ничего не найдено</p>);
        }
        if (img.length < 12 || img.length >= total) {
            return (
                <ul className={css.ImageGallery} onClick={this.onepModal}>
            <ImageGalleryItem pictures={img}/>
            {showModal && <Modal closeModal={this.closeModal} modalImg={modalImg} />}
                </ul>    
            )
        }
        if (img.length !== 0 || status === "resolved" || "loading") {          
            return (
            <ul className={css.ImageGallery} onClick={this.onepModal}>
            <ImageGalleryItem pictures={img} />
            <div className={css.loaderBtn}>        
            {status === "loading"
            ? <Loader/>
            : <Button
            onSubmit={this.onGetImgPage} page={page}/>}
            {showModal && <Modal closeModal={this.closeModal} modalImg={modalImg} />}
            </div>            
            </ul>
   
            );
        }
    }
}

export default ImageGallery;











    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    