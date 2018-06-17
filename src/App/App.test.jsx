import React from "react";
import { mount } from "enzyme";
import App from "./App";
import BlockListContainer from '../Modules/Blocks/Containers/BlockListContainer';
jest.mock('../Modules/Blocks/Containers/BlockListContainer');

describe("App", () => {
    let mountedApp;
    const app = () => {
        if (!mountedApp) {
            mountedApp = mount(
                <App />
            );
        }
        return mountedApp;
    }
  
    beforeEach(() => {
        mountedApp = undefined;
    });
    

    /* Tests */

    it("always renders a div", () => {
        const divs = app().find("div");
        expect(divs.length).toBeGreaterThan(0);
    });

});