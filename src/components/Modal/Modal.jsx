import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import css from "./Modal.module.css"

const modalRoot = document.getElementById("modal-root");


class Modal extends Component {
     
    static propTypes = {
        modalImg: PropTypes.string.isRequired,
        closeModal: PropTypes.func.isRequired,
    }
    
    componentDidMount() {
        window.addEventListener("keydown", this.hendleKeydown)
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", this.hendleKeydown)
    }

    hendleKeydown = (e) => {
        if (e.code === "Escape") {
        this.props.closeModal();
        }
    } 
    
    hendBackropClick = (e) => {
        if (e.currentTarget === e.target) {
           this.props.closeModal()
       }
    }
  
    render()  {
        return createPortal(<div onClick={this.hendBackropClick} className={css.overlay}>
            <div className={css.modal}>
                <img src={this.props.modalImg} data-img={this.props.modalImg} alt="modal-img" width="800" />
            </div>
        </div>, modalRoot);
        
        }
    }


export default Modal;



