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
                    <HiddenCheckbox />
                    <Timestamp><Label>Timestamp:</Label> {this.props.block.timestamp}</Timestamp>
                    <Actions><Label>Action Count:</Label> CHANGE ME</Actions>
                    <Raw>{JSON.stringify(this.props.block)}</Raw>
                </Content>
            </View>
        );
    }
}

const View = styled.label`
    display: block;
    background: #ffffff;
    border-radius: 5px;
    margin-bottom: 20px;
    overflow: hidden;
    cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({
    type: "checkbox"
})`
    display: none;
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

const Info = styled.p`
    margin: 0 0 10px;
`;

const Timestamp = Info.extend`
    
`;

const Actions = Info.extend`
    ${HiddenCheckbox}:not(:checked) ~ & {
        margin: 0;
    }
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
    margin: 0;
    padding: 10px 13px;
    border-radius: 5px;
    line-height: 1.5em;
    white-space: pre-wrap;
    word-wrap: break-word;
    display: none;

    ${HiddenCheckbox}:checked ~ & {
        display: block;
    }
`;