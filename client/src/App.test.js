import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import Login from "./components/Login";
import Transaction from "./components/Transaction";
import PastTransactions from "./components/PastTransactions";
Enzyme.configure({ adapter: new Adapter() });

test("renders app", () => {
    // const { getByText } = render(<App />);
    // const linkElement = getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();

    const component = shallow(<App />);
    expect(component.getElements()).toMatchSnapshot();
});

test("renders login", () => {
    const component = shallow(<Login />);
    expect(component.getElements()).toMatchSnapshot();
});

test("renders transaction", () => {
    const component = shallow(<Transaction />);
    expect(component.getElements()).toMatchSnapshot();
});

test("renders past transactions", () => {
    const component = shallow(<PastTransactions />);
    expect(component.getElements()).toMatchSnapshot();
});
