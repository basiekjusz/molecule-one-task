import { useState } from "react";
import { polish } from "../../../../../language/polish";

interface ConverterFormState {
  value: string;
  error: boolean;
  errorText: string;
}

const initialState: ConverterFormState = {
  value: "",
  error: false,
  errorText: polish.VALUE_MUST_BE_NUMBER,
};

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

  function validate(value: string): void {
    const valueNumber: number = parseInt(value);

    let error = true;
    if (isNaN(valueNumber)) {
      setErrorText(polish.VALUE_MUST_BE_NUMBER);
    } else if (valueNumber % 1 !== 0 || valueNumber < 1) {
      setErrorText(polish.VALUE_MUST_BE_NATURAL);
    } else if (valueNumber > 9999) {
      setErrorText(polish.VALUE_MUST_BE_SMALLER_THAN);
    } else {
      error = false;
    }

    setError(error);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    validate(value);
    setValue(value);
  }

  return { state, handleChange };
}

export default useConverterFormState;
