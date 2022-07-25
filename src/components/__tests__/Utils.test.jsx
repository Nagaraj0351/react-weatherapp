import Utils from "../Utils";

describe("Util functions", () => {
  test("Kelvin to Celseious", () => {
    const kelvinToCelseious = Utils.connvertKelvinToCelsious(300);
    expect(kelvinToCelseious).toBe(26);
  });

  test("convert to camel case", () => {
    const convertCamelcase = Utils.convertCamelcase("test example");
    expect(convertCamelcase).toBe("Test Example");
  });

  test("time conversion", () => {
    const convertCamelcase = Utils.timeConversion("18:42:30");
    expect(convertCamelcase).toBe("6:42:30 PM");
  });
});
