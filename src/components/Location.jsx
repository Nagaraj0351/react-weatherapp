import React from "react";
import { useDispatch } from "react-redux";
import actions from "../actions";

const Location = ({ weather }) => {
  const dispatch = useDispatch();

  const changeCity = (event) => {
    const value = event.target.value;
    if (event.key === "Enter" && value) {
      dispatch(actions.city(value));
    }
  };

  return (
    <div className="location--container">
      <h3 className="location">
        {weather?.name} ({weather?.sys?.country})
      </h3>
      <input
        className="city-search-input"
        onKeyDown={changeCity}
        placeholder="Type city & press enter"
        type="search"
      />
    </div>
  );
};

export default Location;
