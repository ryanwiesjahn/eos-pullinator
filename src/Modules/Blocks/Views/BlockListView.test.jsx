import React from "react";
import { mount } from "enzyme";
import BlockListView from "./BlockListView";
import block1 from '../../../../__mocks__/block1';
import block2 from '../../../../__mocks__/block2';
import block3 from '../../../../__mocks__/block3';
import BlockListCell from './BlockListCell';
jest.mock('./BlockListCell');

describe("BlockListView", () => {
    let props;
    let mountedBlockListView;
    const blockListView = () => {
        if (!mountedBlockListView) {
            mountedBlockListView = mount(
                <BlockListView {...props} />
            );
        }
        return mountedBlockListView;
    }
  
    beforeEach(() => {
        props = {
            onUpdateBlockList: undefined
        };
        mountedBlockListView = undefined;
        BlockListCell.mockClear();
    });

    it("calls onUpdateBlockList on button click", () => {
        let clicked = false;
        props.onUpdateBlockList = () => clicked = true;

        blockListView().find('button').simulate('click');

        expect(clicked).toBeTruthy();
    });
    
    describe("when there are blocks", () => {
        beforeEach(() => {
            props = {
                blocks: [block3, block2, block1],
                onUpdateBlockList: undefined
            };
        });

        it("renders all of the blocks", () => {
            expect.assertions(3);
    
            let blockElements = blockListView().find(BlockListCell);
    
            expect(blockElements.at(0).props().block).toBe(block3);
            expect(blockElements.at(1).props().block).toBe(block2);
            expect(blockElements.at(2).props().block).toBe(block1);
        });

        it("doesn't shows loading text", () => {
            expect(blockListView().find('div').at(1).text().includes('Loading...')).not.toBeTruthy();
        });
    });

    describe("when there are null blocks", () => {
        beforeEach(() => {
            props = {
                blocks: null,
                onUpdateBlockList: undefined
            };
        });

        it("renders no blocks", () => {
            expect(blockListView().find(BlockListCell).length).toBe(0);
        });

        it("shows loading text", () => {
            expect(blockListView().find('div').at(1).text().includes('Loading...')).toBeTruthy();
        });
    });

});