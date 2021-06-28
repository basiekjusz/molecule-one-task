import { Box, Typography } from "@material-ui/core";
import React from "react";
import { polish } from "../../language/polish";
import ConverterForm from "./components/converterForm/ConverterForm";
import ConverterOutput from "./components/ConverterOutput";

/**
 * Converter is a view responsible for converting decimal numbers to runic numeral system.
 * Separated from App view due to possibility of further application development.
 */
function Converter() {
  return (
    <Box>
      <Typography variant="h3">{polish.RUNIC_CONVERTER_TITLE}</Typography>
      <Typography variant="subtitle1">
        {polish.RUNIC_CONVERTER_DESCRIPTION}
      </Typography>
      <ConverterForm submit={(value: string) => console.log(value)} />
      <ConverterOutput />
    </Box>
  );
}

export default Converter;
