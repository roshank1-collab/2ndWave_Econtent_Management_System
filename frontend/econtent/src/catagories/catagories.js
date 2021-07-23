import React from 'react'
import { Component } from 'react';

class Category extends Component{
    state={
        item: this.props.match.params.item,
    }
    render() {
        
        return (
            <>
            <p>ths is catagories page, {this.state.item}</p>
            
            </>
        )
    }
}

export default Category