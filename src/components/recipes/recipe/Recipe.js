import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {
    render () {
        return (
            <div className="recipeLayout">
                <div className="recipeTitle">{this.props.value.name}</div>

                <div className="recipeSubtitle">Indigrents</div>
                <div className="recipeText">{this.props.value.indigrents}</div>

                <div className="recipeSubtitle">Directions</div>
                <div className="recipeText">{this.props.value.directions}</div>
            </div>
        );
    }
}

export default Recipe;