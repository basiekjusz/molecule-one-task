import { useState } from "react";
import validateConverterValue from "./validateConverterValue";

export interface ConverterFormState {
  value: string;
  error: boolean;
  errorText: string;
  touched: boolean;
}

const initialState: ConverterFormState = {
  value: "",
  error: false,
  errorText: "\u00a0",
  touched: false,
};

/**
 * useConverterFormState() is a hook that generates ConverterFormState and
 * functions that allow easy management of it's values.
 */
function useConverterFormState() {
  const [state, setState] = useState<ConverterFormState>(initialState);

  function setValue(value: string, stateCopy: ConverterFormState): void {
    stateCopy.value = value;
  }

  function setError(error: boolean, stateCopy: ConverterFormState): void {
    stateCopy.error = error;
  }

  function setTouched(touched: boolean, stateCopy: ConverterFormState): void {
    stateCopy.touched = touched;
  }

  function setErrorText(
    errorText: string,
    stateCopy: ConverterFormState
  ): void {
    stateCopy.errorText = errorText;
  }

  function handleValidation(value: string, stateCopy: ConverterFormState) {
    const { error, errorText } = validateConverterValue(value);
    setError(error, stateCopy);
    setErrorText(errorText, stateCopy);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;

    let stateCopy: ConverterFormState = state;

    handleValidation(value, stateCopy);

    setValue(value, stateCopy);
    setTouched(true, stateCopy);

    setState({ ...stateCopy });
  }

  return { state, handleChange };
}

export default useConverterFormState;
