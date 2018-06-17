import React, { Component } from 'react';
import styled from 'styled-components';

export default class BlockListView extends Component {
    render() {
        return (
            <View>
                <Header>
                    <Heading>Most recent blocks</Heading>
                </Header>
            </View>
        );
    }
}

const View = styled.div`

`;

const Header = styled.header`

`;

const Heading = styled.h1`
    font-size: 2.1em;
    margin: 0;
`;