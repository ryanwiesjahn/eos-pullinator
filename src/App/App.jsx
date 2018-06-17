import React, { Component } from 'react';
import styled from 'styled-components';
import BlockListContainer from '../Modules/Blocks/Containers/BlockListContainer';

export default class App extends Component {
    render() {
        return (
            <Page>
                <Border />
                <Header>
                    <Logo>EOS Pullinator</Logo>
                </Header>
                
                <Content>
                    <BlockListContainer />
                </Content>
            </Page>
        );
    }
}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Border = styled.div`
    background: #4651AE;
    width: 100%;
    height: 8px;
`;

const Header = styled.header`
    align-self: flex-start;
    padding: 20px 30px;
`;

const Logo = styled.span`
    color: #4651AE;
    font-size: 1.4em;
`;

const Content = styled.div`
    width: 700px;
    padding: 30px;
`;