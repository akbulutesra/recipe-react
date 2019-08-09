import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {

    onClickHandler() {
        this.props.delete();
    }

    render () {
        return (
            <div className="recipeLayout">
                <div className="recipeTitle">{this.props.value.name}</div>

                <div className="recipeSubtitle">Indigrents</div>
                <div>{this.props.value.indigrents}</div>

                <div className="recipeSubtitle">Directions</div>
                <div>{this.props.value.directions}</div>
                <button type="button" onClick={() => this.onClickHandler()}>Delete recipe</button>
            </div>
        );
    }
}

export default Recipe;