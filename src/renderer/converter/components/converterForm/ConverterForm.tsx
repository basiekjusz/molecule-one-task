import { TextField } from "@material-ui/core";
import React from "react";
import useConverterFormState from "./hooks/useConverterFormState";

function ConverterForm() {
  const { state, handleChange } = useConverterFormState();

  return (
    <form noValidate autoComplete="off">
      <TextField
        error={state.error}
        label="Witamy"
        type="number"
        onChange={handleChange}
        value={state.value}
      />
      {state.error && state.errorText}
    </form>
  );
}

export default ConverterForm;
