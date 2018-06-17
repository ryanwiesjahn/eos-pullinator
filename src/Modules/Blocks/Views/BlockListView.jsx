import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlockListCell from './BlockListCell';

export default class BlockListView extends Component {
    static propTypes = {
        blocks: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
        onUpdateBlockList: PropTypes.func,
    };

    static defaultProps = {
        blocks: null
    };

    render() {
        return (
            <div>
                <Header>
                    <Heading>Most recent blocks</Heading>
                    <Button onClick={this.props.onUpdateBlockList}>Load Blocks</Button>
                </Header>

                <div>
                    {this.props.blocks ?
                        this._renderBlockList()
                    : (
                        <Loading>Loading...</Loading>
                    )}
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
    display: flex;
`;

const Heading = styled.h1`
    color: #1F2E41;
    font-size: 2.1em;
    margin: 0;
    flex: 1;
`;

const Button = styled.button`
    transition: background ease-in-out 0.1s;
    background: #4651AE;
    border: none;
    border-radius: 5px;
    padding: 5px 15px;
    font-family: inherit;
    font-size: 1em;
    font-weight: 500;
    color: #EFF3FF;
    cursor: pointer;
    outline: none;

    &:hover {
        background: #6B76D5;
    }
`;

const Loading = styled.div`
    color: #7B7F92;
    font-weight: 700;
    text-align: center;
    margin-top: 50px;
`;