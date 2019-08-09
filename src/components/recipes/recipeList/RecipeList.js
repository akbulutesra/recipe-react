import React, { Component } from 'react';
import './RecipeList.css';

class RecipeList extends Component {

    onChangeHandler(i) {
        this.props.updateMethod(i);
    }

    render() {
        const items = this.props.value.map((item, i) =>
            <li className="recipeListLi" key={i} onClick={() => this.onChangeHandler(i)}
            >{item.name} </li>
        );

        return (
            <ul>
                {items}
            </ul>
        );
    }
}

export default RecipeList;