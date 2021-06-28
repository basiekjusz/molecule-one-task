import { Box } from "@material-ui/core";
import ConverterFormInput from "./components/ConverterFormInput";
import ConverterFormSubmitButton from "./components/ConverterFormSubmitButton";
import useConverterFormState from "./hooks/useConverterFormState";

interface ConverterFormProps {
  submit: (value: number) => void;
}

/**
 * ConverterForm component allows user to enter number to convert it to runic system.
 * Handles input validation.
 */
function ConverterForm(props: ConverterFormProps) {
  const { state, handleChange } = useConverterFormState();

  function handleSubmit(event: any): void {
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
        <ConverterFormInput
          value={state.value}
          error={state.error}
          errorText={state.errorText}
          onChange={handleChange}
        />
        <ConverterFormSubmitButton
          error={state.error}
          touched={state.touched}
        />
      </Box>
    </form>
  );
}

export default ConverterForm;
