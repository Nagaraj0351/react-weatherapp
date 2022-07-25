import { render, screen } from "@testing-library/react";
import Location from "../Location";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const weather = {
  name: "Bengaluru",
};

const initialState = "Bengaluru";
const mockStore = configureStore();
let store;

const renderComonent = () => {
  store = mockStore(initialState);
  render(
    <Provider store={store}>
      <Location weather={weather} />
    </Provider>
  );
};

describe("Location", () => {
  test("renders correctly", () => {
    renderComonent();

    expect(
      screen.getAllByPlaceholderText("Type city & press enter")
    ).not.toBeNull();

    expect(screen.getByText(/Bengaluru/)).toHaveClass("location");
  });
});
