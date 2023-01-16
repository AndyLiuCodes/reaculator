import { useState } from "react";
import CalculatorScreen from "./CalculatorScreen";
import CalculatorButtons from "./CalculatorButtons";
import "../../assets/css/calculator.css";

function CalculatorBody() {
  const [total, setTotal] = useState(0);

  return (
    <div className="calculator-body">
      <CalculatorScreen />
      <CalculatorButtons />
    </div>
  );
}

export default CalculatorBody;
