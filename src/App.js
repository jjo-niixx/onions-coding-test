import React from "react";
import styled from "styled-components";
import Nav from "./Components/Nav/Nav";
import PrescriptionDetail from "./Pages/PrescriptionDetail/PrescriptionDetail";

function App() {
  return (
    <Container>
      <Nav />
      <PrescriptionDetail />
    </Container>
  );
}

export default App;

const Container = styled.div``;
