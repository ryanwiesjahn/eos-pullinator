import React from "react";
import { mount } from "enzyme";
import block from '../../../../__mocks__/block1';
import BlockListCell from "./BlockListCell";

describe("BlockListCell", () => {
    let props;
    let mountedBlockListCell;
    const blockListCell = () => {
        if (!mountedBlockListCell) {
            mountedBlockListCell = mount(
                <BlockListCell {...props} />
            );
        }
        return mountedBlockListCell;
    }
  
    beforeEach(() => {
        props = {
            block
        };
        mountedBlockListCell = undefined;
    });
    

    /* Tests */

    it("shows block number", () => {
        expect(blockListCell().text().includes(block.block_num)).toBeTruthy();
    });

    it("shows block hash", () => {
        expect(blockListCell().text().includes(block.id)).toBeTruthy();
    });

    it("shows block timestamp", () => {
        expect(blockListCell().text().includes(block.timestamp)).toBeTruthy();
    });

    // TODO: Test showing action count.

    it("toggles raw block data on click", () => {
        const pre = () => blockListCell().find('pre');

        expect.assertions(3);
        expect(pre().length).toBe(0);
        blockListCell().find('div').first().simulate('click');
        expect(pre().length).toBe(1);
        expect(pre().text()).toBe(JSON.stringify(block));
    });

});