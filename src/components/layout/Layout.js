import React, { Component } from 'react';

import Aux from '../hoc/Aux';
import Header from '../header/Header';
import Recipes from '../recipes/Recipes';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Header />
                <Recipes />
            </Aux>
        );
    }
}

export default Layout;
