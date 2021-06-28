import { TextField, Box, FormHelperText } from "@material-ui/core";
import { ChangeEvent } from "react";
import { polish } from "../../../../../language/polish";

interface ConverterFormInputProps {
  value: string;
  error: boolean;
  errorText: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * ConverterFormInput is simple text field made for ConverterForm.
 * Displays error if needed.
 */
function ConverterFormInput(props: ConverterFormInputProps) {
  const { value, error, errorText, onChange } = props;
  return (
    <Box width={0.5}>
      <TextField
        value={value}
        onChange={onChange}
        label={polish.CONVERTER_INPUT_LABEL}
        error={error}
        type="number"
        inputProps={{
          "data-testid": "converter-input",
        }}
        fullWidth
      />
      <FormHelperText>{errorText}</FormHelperText>
    </Box>
  );
}

export default ConverterFormInput;
