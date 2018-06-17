import React, { Component } from 'react';
import BlockService from '../Common/Services/BlockService';

export default class App extends Component {
    _blockService;

    constructor(props) {
        super(props);

        this._blockService = new BlockService({
            httpEndpoint: 'https://eos.greymass.com',
            chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
        });
    }

    componentDidMount() {
        this._test();
    }

    async _test() {
        let result = await this._blockService.getRecentBlocks(10);
        console.log(result.map(({ block_num, timestamp }) => ({ block_num, timestamp })));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}
