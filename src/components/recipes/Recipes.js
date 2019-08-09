import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import RecipeList from './recipeList/RecipeList';
import Recipe from './recipe/Recipe';
import ReactModal from 'react-modal';

class Recipes extends Component {

    constructor(props) {
        super(props);

        this.updateSelectedIndex = this.updateSelectedIndex.bind(this);
        this.deleteRecipe = this.deleteRecipe.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);

        this.handleChangeName = this.handleChangeName.bind(this);

        this.handleChangeIndigrents = this.handleChangeIndigrents.bind(this);

        this.handleChangeDirection = this.handleChangeDirection.bind(this);
        this.handleAddRecipe = this.handleAddRecipe.bind(this);

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
            selectedIndex: 0,
            showModal: false,

            newName: '',
            newIndigrents: '',
            newDirections: '',
        }
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    updateSelectedIndex(index) {
        this.setState({selectedIndex: index})
    }

    deleteRecipe() {
        const filteredArray = this.state.recipes.filter((_, i) => i !== this.state.selectedIndex);

        this.setState({
            recipes: filteredArray,
            selectedIndex: 0,
        });
    }

    handleChangeName(event) {
        this.setState({ newName: event.target.value });
    }

    handleChangeIndigrents(event) {
        this.setState({ newIndigrents: event.target.value });
    }

    handleChangeDirection(event) {
        this.setState({ newDirections: event.target.value });
    }

    handleAddRecipe() {
        const recipes = this.state.recipes;
        recipes.push({
            name: this.state.newName,
            indigrents: this.state.newIndigrents,
            directions: this.state.newDirections,
        })

        this.setState({
            recipes,
            showModal: false,
            newName: '',
            newIndigrents: '',
            newDirections: '',
        });
    }

    render() {
        return (
            <Aux>
                <RecipeList value={this.state.recipes} updateMethod={this.updateSelectedIndex} />
                <button onClick={this.handleOpenModal}>Add Recipe</button>
                <Recipe value={this.state.recipes[this.state.selectedIndex]} delete={this.deleteRecipe} />



                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                    <label>Recipe Name</label>
                    <input type="text" value={this.state.newName} onChange={this.handleChangeName} />
                    <label>Recipe Indigrents</label>
                    <input type="text" value={this.state.newIndigrents} onChange={this.handleChangeIndigrents} />
                    <label>Recipe Directions</label>
                    <input type="text" value={this.state.newDirections} onChange={this.handleChangeDirection} />
                    <input type="submit" value="Submit" onClick={this.handleAddRecipe} />

                </ReactModal>
            </Aux>
        );
    }
}

export default Recipes;