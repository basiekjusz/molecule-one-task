import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from "@testing-library/react";
import { polish } from "../../../../language/polish";
import ConverterForm from "./ConverterForm";

describe("ConverterForm", function () {
  let renderResult: RenderResult;
  let input: HTMLInputElement;
  const submit = (value: string) => {};

  beforeEach(function () {
    renderResult = render(<ConverterForm submit={submit} />);
    input = renderResult.getByTestId("converter-input") as HTMLInputElement;
  });

  it("should change on input", async function () {
    fireEvent.change(input, { target: { value: "128" } });
    expect(input).toHaveValue(128);
  });

  it("should pass on valid value", async function () {
    fireEvent.change(input, { target: { value: "128" } });
    await waitFor(() => expect(input).toBeValid());
  });

  it("should pass on lower bound", async function () {
    fireEvent.change(input, { target: { value: "1" } });
    await waitFor(() => expect(input).toBeValid());
  });

  it("should pass on upper bound", async function () {
    fireEvent.change(input, { target: { value: "9999" } });
    await waitFor(() => expect(input).toBeValid());
  });

  it("should fail on value greater than upper bound", async function () {
    fireEvent.change(input, { target: { value: "10000" } });
    await waitFor(() => expect(input).toBeInvalid());

    const errorMessage = renderResult.getByText(
      polish.VALUE_MUST_BE_SMALLER_THAN
    );
    expect(errorMessage).toBeTruthy();
  });

  it("should fail on value smaller than lower bound", async function () {
    fireEvent.change(input, { target: { value: "0" } });
    await waitFor(() => expect(input).toBeInvalid());

    const errorMessage = renderResult.getByText(polish.VALUE_MUST_BE_NATURAL);
    expect(errorMessage).toBeTruthy();
  });

  it("should fail on float value", async function () {
    fireEvent.change(input, { target: { value: "1.5" } });
    await waitFor(() => expect(input).toBeInvalid());

    const errorMessage = renderResult.getByText(polish.VALUE_MUST_BE_NATURAL);
    expect(errorMessage).toBeTruthy();
  });
});
