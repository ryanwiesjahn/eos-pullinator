import React, { Component } from 'react';
import BlockListView from '../Views/BlockListView';
import BlockService from '../../../Common/Services/BlockService';

export default class BlockListContainer extends Component {
    _blockService;

    constructor(props) {
        super(props);

        this._blockService = new BlockService({
            httpEndpoint: 'https://eos.greymass.com',
            chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
        });
    }

    render() {
        return (
            <BlockListView />
        );
    }
}
