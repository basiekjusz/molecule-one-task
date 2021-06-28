import { TextField, FormHelperText, Box, Button } from "@material-ui/core";
import { polish } from "../../../../language/polish";
import useConverterFormState from "./hooks/useConverterFormState";

interface ConverterFormProps {
  submit: (value: number) => void;
}

function ConverterForm(props: ConverterFormProps) {
  const { state, handleChange } = useConverterFormState();

  function handleSubmit(event: any) {
    event.preventDefault();
    if (!state.error) {
      props.submit(parseInt(state.value));
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
        mt={2}
      >
        <Box width={0.5}>
          <TextField
            error={state.error}
            label={polish.CONVERTER_INPUT_LABEL}
            type="number"
            onChange={handleChange}
            value={state.value}
            fullWidth
            inputProps={{
              "data-testid": "converter-input",
            }}
          />
          <FormHelperText>{state.errorText}</FormHelperText>
        </Box>
        <Box ml={3}>
          <Button type="submit" disabled={state.error || !state.touched}>
            {polish.CONVERTER_SUBMIT_LABEL}
          </Button>
        </Box>
      </Box>
    </form>
  );
}

export default ConverterForm;
