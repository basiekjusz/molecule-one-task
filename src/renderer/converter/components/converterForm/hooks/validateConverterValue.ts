import { polish } from "../../../../../language/polish";

export interface ValidationOutput {
  error: boolean;
  errorText: string;
}

function validateConverterValue(value: string): ValidationOutput {
  const valueNumber: number = Number(value);

  let error: boolean = true;
  let errorText: string = "";
  if (isNaN(valueNumber)) {
    errorText = polish.VALUE_MUST_BE_NUMBER;
  } else if (!Number.isInteger(valueNumber) || valueNumber < 1) {
    errorText = polish.VALUE_MUST_BE_NATURAL;
  } else if (valueNumber > 9999) {
    errorText = polish.VALUE_MUST_BE_SMALLER_THAN;
  } else {
    error = false;
  }

  return { error, errorText };
}

export default validateConverterValue;
