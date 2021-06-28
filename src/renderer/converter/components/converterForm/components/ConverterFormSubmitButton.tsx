import { Box, Button } from "@material-ui/core";
import { polish } from "../../../../../language/polish";

interface ConverterFormSubmitButtonProps {
  touched: boolean;
  error: boolean;
}

/**
 * ConverterFormSubmitButton disables automatically in case of an error or if not touched yet.
 */
function ConverterFormSubmitButton(props: ConverterFormSubmitButtonProps) {
  const { error, touched } = props;
  return (
    <Box ml={3}>
      <Button type="submit" disabled={error || !touched}>
        {polish.CONVERTER_SUBMIT_LABEL}
      </Button>
    </Box>
  );
}

export default ConverterFormSubmitButton;
