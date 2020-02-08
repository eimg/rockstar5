import React from "react";
import Item from "./Item";
import renderer from "react-test-renderer";

test("Item Component", () => {
    const item = { _id: 1, name: 'Sample' };
    const snapshot = renderer.create(<Item item={item} />).toJSON();

    expect(snapshot).toMatchSnapshot();
});
