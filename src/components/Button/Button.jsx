import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from "./Button.module.css"

class Button extends Component {
    state = {
        page: 0,
    }
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }

    onAddPage = (e) => {
        this.setState(prevState => ({
            page: prevState.page + 1
        }))
        this.props.onSubmit(this.state.page);
        
    }

    render() {
        return (
            <>
            <button className={css.Button} onClick={this.onAddPage}>Load more</button>
            </>
        )
    }
} 

export default Button;