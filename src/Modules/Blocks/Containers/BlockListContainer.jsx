import React, { Component } from 'react';
import BlockListView from '../Views/BlockListView';
import BlockService from '../../../Common/Services/BlockService';
import config from '../../../config';

export default class BlockListContainer extends Component {
    _blockService;

    constructor(props) {
        super(props);

        this._blockService = new BlockService(config.blockservice);

        this.state = {
            blocks: null
        }
    }

    componentDidMount() {
        this.updateRecentBlocks();
    }

    updateRecentBlocks = async () => {
        this.setState({
            blocks: null
        });

        let blocks = await this._blockService.getRecentBlocks(10);
        this.setState({
            blocks
        });
    }

    render() {
        return (
            <BlockListView 
                blocks={this.state.blocks}
                onUpdateBlockList={this.updateRecentBlocks} />
        );
    }
}
