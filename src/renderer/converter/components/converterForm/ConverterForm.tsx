import { TextField, FormHelperText, Box, Button } from "@material-ui/core";
import React from "react";
import useConverterFormState from "./hooks/useConverterFormState";

interface ConverterFormProps {
  submit: (value: string) => void;
}

function ConverterForm(props: ConverterFormProps) {
  const { state, handleChange } = useConverterFormState();

  function handleSubmit(event: any) {
    event.preventDefault();
    if (!state.error) {
      props.submit(state.value);
    }
  }

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        width={1}
      >
        <Box width={0.5}>
          <TextField
            error={state.error}
            label="Liczba do przekonwertowania"
            type="number"
            onChange={handleChange}
            value={state.value}
            fullWidth
            inputProps={{
              "data-testid": "main-input",
            }}
          />
          <FormHelperText>{state.errorText}</FormHelperText>
        </Box>
        <Box ml={3}>
          <Button type="submit" disabled={state.error || !state.touched}>
            Konwertuj
          </Button>
        </Box>
      </Box>
    </form>
  );
}

export default ConverterForm;
