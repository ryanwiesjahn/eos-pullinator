import React from "react";
import { mount } from "enzyme";
import BlockListContainer from './BlockListContainer';
import block1 from '../../../../__mocks__/block1';
import block2 from '../../../../__mocks__/block2';
import block3 from '../../../../__mocks__/block3';
import BlockService from '../../../Common/Services/BlockService';
import BlockListView from "../Views/BlockListView";
jest.mock('../../../Common/Services/BlockService');
jest.mock('../Views/BlockListView');

describe("BlockListContainer", () => {
    let state = {};
    let mountedBlockListContainer;
    const blockListContainer = () => {
        if (!mountedBlockListContainer) {
            mountedBlockListContainer = mount(
                <BlockListContainer />
            );
        }
        mountedBlockListContainer.setState(state);
        return mountedBlockListContainer;
    }
  
    beforeEach(() => {
        state = {
            blocks: [block3, block2, block1],
        };
        mountedBlockListContainer = undefined;
        BlockService.mockClear();
        BlockListView.mockClear();
    });

    describe('`render`', () => {
        it("renders BlockListView with all of the blocks", () => {
            expect(blockListContainer().find(BlockListView).props().blocks).toBe(state.blocks);
        });
    
        it("renders BlockListView with `updateRecentBlocks` callback", () => {
            expect(blockListContainer().find(BlockListView).props().onUpdateBlockList).toBe(blockListContainer().instance()._updateRecentBlocks);
        });
    })

    describe("`componentDidMount`", () => {
        it("updates blocks state to most recent blocks", async () => {
            expect.assertions(3);
            blockListContainer().instance().setState = jest.fn();
            
            expect(blockListContainer().state().blocks).toEqual([block3, block2, block1]);

            await blockListContainer().instance()._updateRecentBlocks();

            expect(blockListContainer().instance().setState).toHaveBeenCalledWith({ blocks: null });
            expect(blockListContainer().instance().setState).toHaveBeenCalledWith({ blocks: [block3, block2] });
        });
    });

    describe("`_updateRecentBlocks`", () => {
        it("updates blocks state to most recent blocks", async () => {
            expect.assertions(3);
            blockListContainer().instance().setState = jest.fn();
            
            expect(blockListContainer().state().blocks).toEqual([block3, block2, block1]);

            await blockListContainer().instance()._updateRecentBlocks();

            expect(blockListContainer().instance().setState).toHaveBeenCalledWith({ blocks: null });
            expect(blockListContainer().instance().setState).toHaveBeenCalledWith({ blocks: [block3, block2] });
        });
    });

});