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
    
`;

const Border = styled.div`
    background: #4651AE;
    height: 8px;
`;

const Header = styled.header`
    padding: 20px 30px;
`;

const Logo = styled.span`
    color: #4651AE;
    font-size: 1.5em;
`;

const Content = styled.div`
    padding: 30px;
`;