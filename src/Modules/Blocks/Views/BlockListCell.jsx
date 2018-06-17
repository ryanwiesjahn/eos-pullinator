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

    render() {
        return (
            <View>
                <Border />
                <Header>
                    <Number>{this.props.block.block_num}</Number>
                    <Hash>{this.props.block.id}</Hash>
                </Header>
                <Content>
                    <Timestamp><Label>Timestamp:</Label> {this.props.block.timestamp}</Timestamp>
                    <Actions><Label>Action Count:</Label> CHANGE ME</Actions>
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
    color: #ffffff;
    font-size: 0.8em;
    font-weight: 500;
    border-radius: 0 0 5px 0;
    padding: 5px;
    margin-right: 10px;
`;

const Hash = styled.span`
    color: #7B7F92;
    font-size: 0.9em;
`;

const Content = styled.div`
    padding: 20px;
`;

const Info = styled.p`
    margin: 10px 0 0;
`;

const Timestamp = Info.extend`
    margin: 0;
`;

const Actions = Info.extend`
    
`;

const Label = styled.span`
    display: inline-block;
    margin-right: 5px;
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 500;
`;