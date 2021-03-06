import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BurgerBuilder } from "./BurgerBuilder";
import  BuildControls  from "../../components/Burger/BuildControls/BuildControls";
configure({
  adapter: new Adapter(),
});

describe("<BurgerBuilder />", () => {
  let wrapper;
  beforeEach(() => {
    // passing the requirement of passing a functions 
    wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);
  });
  it("should render BuildControls when receiving ingredients", () => {
    wrapper.setProps({ "ings": { "lettuce": 0 } });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
  it("should not render BuildControls when no ingredients are passed", () => {
    wrapper.setProps({ "ings": null });
    expect(wrapper.find(BuildControls)).toHaveLength(0);
  });
});
