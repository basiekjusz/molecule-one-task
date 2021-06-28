import { Container } from "@material-ui/core";
import React from "react";
import Converter from "./converter/Converter";

function App() {
  return (
    <Container maxWidth="md">
      <Converter />
    </Container>
  );
}

export default App;
