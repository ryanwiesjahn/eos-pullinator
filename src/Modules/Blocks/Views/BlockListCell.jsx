import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class BlockListCell extends Component {
    static propTypes = {
        block: PropTypes.instanceOf(Object),
    };

    static defaultProps = {
        block: {}
    };

    constructor(props) {
        super(props);

        this.state = {
            showBlockData: false
        };
    }

    _toggleBlockData = () => {
        let showBlockData = !this.state.showBlockData;
        this.setState({ showBlockData });
    }

    render() {
        return (
            <View onClick={this._toggleBlockData}>
                <Border />
                <Header>
                    <Number>{this.props.block.block_num}</Number>
                    <Hash>{this.props.block.id}</Hash>
                </Header>
                <Content>
                    <Timestamp><Label>Timestamp:</Label> {this.props.block.timestamp}</Timestamp>
                    <Transactions><Label>Transactions:</Label> {this.props.block.transactions.length}</Transactions>
                    { this.state.showBlockData &&
                        <Raw>{JSON.stringify(this.props.block)}</Raw>
                    }
                </Content>
            </View>
        );
    }
}

const View = styled.div`
    background: #ffffff;
    border-radius: 5px;
    margin-bottom: 20px;
    overflow: hidden;
    cursor: pointer;
`;

const Header = styled.header`
    display: flex;
    align-items: center;
`;

const Border = styled.div`
    background: #4651AE;
    height: 3px;
`;

const Number = styled.span`
    background: #4651AE;
    color: #EFF3FF;
    font-size: 0.8em;
    font-weight: 500;
    border-radius: 0 0 5px 0;
    padding: 5px;
    margin-right: 8px;
`;

const Hash = styled.span`
    color: #7B7F92;
    font-size: 0.9em;
`;

const Content = styled.div`
    padding: 20px;
`;

const Timestamp = styled.p`
    margin: 0 0 10px;
`;

const Transactions = styled.p`
    margin: 0;
`;

const Label = styled.span`
    display: inline-block;
    margin-right: 5px;
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 500;
`;

const Raw = styled.pre`
    background: rgba(0, 0, 0, 0.05);
    color: #7B7F92;
    font-size: 0.8em;
    margin: 20px 0 0;
    padding: 10px 13px;
    border-radius: 5px;
    line-height: 1.5em;
    white-space: pre-wrap;
    word-wrap: break-word;
`;