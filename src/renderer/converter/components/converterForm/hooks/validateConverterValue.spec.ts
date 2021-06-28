import { polish } from "../../../../../language/polish";
import validateConverterValue from "./validateConverterValue";

describe("validateConverterValue()", function () {
  it("should pass on valid value", async function () {
    const { error } = validateConverterValue("128");
    expect(error).toBe(false);
  });

  it("should pass on lower bound", async function () {
    const { error } = validateConverterValue("1");
    expect(error).toBe(false);
  });

  it("should pass on upper bound", async function () {
    const { error } = validateConverterValue("9999");
    expect(error).toBe(false);
  });

  it("should fail on value greater than upper bound", async function () {
    const { error, errorText } = validateConverterValue("10000");
    expect(error).toBe(true);
    expect(errorText).toBe(polish.VALUE_MUST_BE_SMALLER_THAN);
  });

  it("should fail on value smaller than lower bound", async function () {
    const { error, errorText } = validateConverterValue("0");
    expect(error).toBe(true);
    expect(errorText).toBe(polish.VALUE_MUST_BE_NATURAL);
  });

  it("should fail on float value", async function () {
    const { error, errorText } = validateConverterValue("1.5");
    expect(error).toBe(true);
    expect(errorText).toBe(polish.VALUE_MUST_BE_NATURAL);
  });

  it("should fail on NaN value", async function () {
    const { error, errorText } = validateConverterValue("NaN.");
    expect(error).toBe(true);
    expect(errorText).toBe(polish.VALUE_MUST_BE_NUMBER);
  });
});
