import { polish } from "../../../../../language/polish";

export interface ValidationOutput {
  error: boolean;
  errorText: string;
}

/**
 * validateConverterValue() is a simple validator of given value.
 * For more advanced purposes in future Yup would be much more convenient.
 */
function validateConverterValue(value: string): ValidationOutput {
  const valueNumber: number = Number(value);

  let error: boolean = true;
  let errorText: string = "\u00a0";
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
