import { Box } from "@material-ui/core";

interface ConverterOutputImageProps {
  image: string;
  value: number;
}

function ConverterOutputImage(props: ConverterOutputImageProps) {
  const { image, value } = props;

  return (
    <Box mb={2}>
      <img src={image} alt={String(value)} className="converter-output" />
    </Box>
  );
}

export default ConverterOutputImage;
