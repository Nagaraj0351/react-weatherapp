import _ from "lodash";

const Utils = {
  connvertKelvinToCelsious(value) {
    return Math.floor(value - 273.15);
  },

  convertCamelcase(string) {
    return _.startCase(_.camelCase(string));
  },

  timeConversion(time) {
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      time = time.slice(1);
      time[5] = +time[0] < 12 ? " AM" : " PM";
      time[0] = +time[0] % 12 || 12;
    }
    return time.join("");
  },
};

export default Utils;
