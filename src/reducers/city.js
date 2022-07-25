const cityReducer = (state = "Bengaluru", action) => {
  switch (action.type) {
    case "UPDATECITY":
      return action.cityName;
    default:
      return state;
  }
};

export default cityReducer;
