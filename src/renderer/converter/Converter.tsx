import { Box, Typography } from "@material-ui/core";
import { polish } from "../../language/polish";
import ConverterForm from "./components/converterForm/ConverterForm";
import ConverterOutput from "./components/converterOutput/ConverterOutput";
import useConverterState from "./hooks/useConverterState";

/**
 * Converter is a view responsible for converting decimal numbers to runic numeral system.
 * Separated from App view due to possibility of further application development.
 */
function Converter() {
  const { state, submit } = useConverterState();

  return (
    <Box>
      <Typography variant="h3">{polish.RUNIC_CONVERTER_TITLE}</Typography>
      <Typography variant="subtitle1">
        {polish.RUNIC_CONVERTER_DESCRIPTION}
      </Typography>
      <ConverterForm submit={submit} />
      <ConverterOutput
        done={state.done}
        loading={state.loading}
        image={state.image}
        value={state.value}
      />
    </Box>
  );
}

export default Converter;
