import { Typography, Box, CircularProgress } from "@material-ui/core";
import React from "react";
import ConverterOutputDownloadButton from "./components/ConverterOutputDownloadButton";
import ConverterOutputImage from "./components/ConverterOutputImage";

import "./ConverterOutput.css";

interface ConverterOutputProps {
  done: boolean;
  loading: boolean;
  image: string;
  value: number;
}

/**
 * ConverterOutput takes care of displaying converter's output.
 * Displays CircularProgres in case of loading.
 */
function ConverterOutput(props: ConverterOutputProps) {
  const { image, done, loading, value } = props;

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <React.Fragment>
      {done && (
        <Box
          width={1}
          mt={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box mb={2}>
            <Typography variant="h6" color="textSecondary">
              {value}
            </Typography>
          </Box>
          <ConverterOutputImage image={image} value={value} />
          <ConverterOutputDownloadButton image={image} value={value} />
        </Box>
      )}
    </React.Fragment>
  );
}

export default ConverterOutput;
