import { fireEvent, render, screen } from "@testing-library/react";
import WeatherComponent from "../WeatherComponent";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const initialState = "Bengaluru";
const mockStore = configureStore();
let store;

const renderComonent = () => {
  store = mockStore(initialState);
  render(
    <Provider store={store}>
      <WeatherComponent />
    </Provider>
  );
};

describe("Weather main component", () => {
  test("renders correctly", () => {
    renderComonent();

    expect(
      screen.getAllByText("Current weather condition:")[0]
    ).toBeInTheDocument();

    expect(screen.queryByText("Wind Speed:")).not.toBeInTheDocument();
  });

  test("additional weather Info", () => {
    renderComonent();

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(screen.getByText("Wind Speed:")).toBeInTheDocument();
    expect(screen.getByText("Sunrise Time:")).toBeInTheDocument();
  });
});
