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
        let numberElement = blockListCell().find('header').find('span').first();
        expect(numberElement.text().includes(block.block_num)).toBeTruthy();
    });

    it("shows block hash", () => {
        let hashElement = blockListCell().find('header').find('span').last();
        expect(hashElement.text().includes(block.id)).toBeTruthy();
    });

    it("shows block timestamp", () => {
        let timestampElement = blockListCell().find('div').at(2).find('p').first();
        expect(timestampElement.text().includes(block.timestamp)).toBeTruthy();
    });

    it("shows block transaction count", () => {
        let transactionsElement = blockListCell().find('div').at(2).find('p').last();
        expect(transactionsElement.text().includes(block.transactions.length)).toBeTruthy();
    });

    it("toggles raw block data on click", () => {
        const pre = () => blockListCell().find('pre');

        expect.assertions(3);
        expect(pre().length).toBe(0);
        blockListCell().find('div').first().simulate('click');
        expect(pre().length).toBe(1);
        expect(pre().text()).toBe(JSON.stringify(block));
    });

});