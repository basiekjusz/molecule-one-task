import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { polish } from "../../../../../language/polish";

interface DownloadButtonProps {
  image: string;
  value: number;
}

function ConverterOutputDownloadButton(props: DownloadButtonProps) {
  const { image, value } = props;

  return (
    <a href={image} download={value}>
      <Button startIcon={<SaveIcon />} color="primary" variant="contained">
        {polish.DOWNLOAD_LABEL}
      </Button>
    </a>
  );
}

export default ConverterOutputDownloadButton;
