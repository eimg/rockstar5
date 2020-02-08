import React from "react";
import Header from "./Header";
import renderer from "react-test-renderer";

test("Header Component", () => {
    const tree = renderer
        .create(<Header count={2} />)
        .toJSON();
        
    expect(tree).toMatchSnapshot();
});
