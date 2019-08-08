import React, { Component } from 'react';

class Recipe extends Component {

    onClickHandler() {
        this.props.delete();
    }

    render () {
        return (
            <div>
                <div>{this.props.value.name}</div>
                <div>{this.props.value.indigrents}</div>
                <div>{this.props.value.directions}</div>
                <button type="button" onClick={() => this.onClickHandler()}>Delete recipe</button>
            </div>
        );
    }
}

export default Recipe;