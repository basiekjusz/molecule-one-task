import { useState } from "react";
import generateRunicRepresentation from "./generateRunicRepresentation";

export interface ConverterState {
  value: number;
  image: string;
  done: boolean;
  loading: boolean;
}

const initialState: ConverterState = {
  value: 0,
  image: "",
  done: false,
  loading: false,
};

/**
 * useConverterState() is a hook that generates ConverterState and
 * functions that allow easy management of it's values. Also contains submit()
 * function that generates runic representation of given number.
 */
function useConverterState() {
  const [state, setState] = useState<ConverterState>(initialState);

  function setValue(value: number, stateCopy: ConverterState): void {
    stateCopy.value = value;
  }

  function setImage(image: string, stateCopy: ConverterState): void {
    stateCopy.image = image;
  }

  function setDone(done: boolean, stateCopy: ConverterState): void {
    stateCopy.done = done;
  }

  function setLoading(loading: boolean, stateCopy: ConverterState): void {
    stateCopy.loading = loading;
  }

  async function submit(value: number): Promise<void> {
    let stateCopy: ConverterState = state;

    const image = await generateRunicRepresentation(value);

    setValue(value, stateCopy);
    setImage(image, stateCopy);
    setDone(true, stateCopy);
    setLoading(false, stateCopy);

    setState({ ...stateCopy });
  }

  return { state, submit };
}

export default useConverterState;
