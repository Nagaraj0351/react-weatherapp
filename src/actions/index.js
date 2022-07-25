const actions = {
  city: (value) => {
    return {
      type: "UPDATECITY",
      cityName: value,
    };
  },
};

export default actions;
