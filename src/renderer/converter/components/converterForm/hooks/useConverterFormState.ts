import { useState } from "react";
import { polish } from "../../../../../language/polish";
import validateConverterValue from "./validateConverterValue";

export interface ConverterFormState {
  value: string;
  error: boolean;
  errorText: string;
}

const initialState: ConverterFormState = {
  value: "",
  error: false,
  errorText: polish.VALUE_MUST_BE_NUMBER,
};

/**
 * useConverterFormState() is a hook that generates ConverterFormState and
 * functions that allow easy management of it's values.
 */
function useConverterFormState() {
  const [state, setState] = useState<ConverterFormState>(initialState);

  function setValue(value: string): void {
    let stateCopy: ConverterFormState = state;
    stateCopy.value = value;
    setState({ ...stateCopy });
  }

  function setError(error: boolean): void {
    let stateCopy: ConverterFormState = state;
    stateCopy.error = error;
    setState({ ...stateCopy });
  }

  function setErrorText(errorText: string): void {
    let stateCopy: ConverterFormState = state;
    stateCopy.errorText = errorText;
    setState({ ...stateCopy });
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    const { error, errorText } = validateConverterValue(value);
    setError(error);
    setErrorText(errorText);
    setValue(value);
  }

  return { state, handleChange };
}

export default useConverterFormState;
