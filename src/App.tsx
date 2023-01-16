import { useState } from "react";
import CalculatorBody from "./components/Calculator/CalculatorBody";
import CenteredLayout from "./components/Layout/CenteredLayout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CenteredLayout>
        <CalculatorBody />
      </CenteredLayout>
    </div>
  );
}

export default App;
