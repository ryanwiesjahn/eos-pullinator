import React, { Component } from 'react';
import BlockListContainer from '../Modules/Blocks/Containers/BlockListContainer';

export default class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <span>EOS Pullinator</span>
                </header>
                
                <BlockListContainer />
            </div>
        );
    }
}
