import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import RecipeList from './recipeList/RecipeList';
import Recipe from './recipe/Recipe';

class Recipes extends Component {

    constructor(props) {
        super(props);

        this.updateSelectedIndex = this.updateSelectedIndex.bind(this);

        this.state = {
            recipes: [
                {
                    name: "pasta",
                    indigrents: "pasta, tomato, salt",
                    directions: "boil water, put pasta, ....",
                },
                {
                    name: "omlet",
                    indigrents: "egg, tomato, salt, onion",
                    directions: "melt butter, put eggs,,,",
                },
            ],
            selectedIndex : 0,
        }
    }

    updateSelectedIndex(index) {
        this.setState({selectedIndex: index});
    }

    render() {
        return (
            <Aux>
                <RecipeList value={this.state.recipes} updateMethod={this.updateSelectedIndex}/>
                <Recipe value={this.state.recipes[this.state.selectedIndex]}/>
            </Aux>
        );
    }
}

export default Recipes;