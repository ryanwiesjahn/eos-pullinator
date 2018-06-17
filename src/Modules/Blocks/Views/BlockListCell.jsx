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
                {this.props.block.id}
            </View>
        );
    }
}

const View = styled.div`

`;