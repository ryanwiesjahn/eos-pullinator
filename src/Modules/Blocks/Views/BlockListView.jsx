import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlockListCell from './BlockListCell';

export default class BlockListView extends Component {
    static propTypes = {
        blocks: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
    };

    static defaultProps = {
        blocks: []
    };

    render() {
        return (
            <div>
                <Header>
                    <Heading>Most recent blocks</Heading>
                </Header>

                <div>
                    {this._renderBlockList()}
                </div>
            </div>
        );
    }

    _renderBlockList() {
        return this.props.blocks.map(block => {
            return (
                <BlockListCell 
                    key={block.id}
                    block={block} />
            );
        })
    }
}

const Header = styled.header`
    margin-bottom: 20px;
`;

const Heading = styled.h1`
    color: #1F2E41;
    font-size: 2.1em;
    margin: 0;
`;