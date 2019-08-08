import React, { Component } from 'react';

class Recipe extends Component {
    render () {
        return (
            <div>
                <div>{this.props.value.name}</div>
                <div>{this.props.value.indigrents}</div>
                <div>{this.props.value.directions}</div>
            </div>
        );
    }
}

export default Recipe;