import { useCalculator } from "../../hooks/CalculatorProvider";

function CalculatorScreen() {
  const calculator = useCalculator();

  return <div className="calculator-screen">{calculator.input}</div>;
}

export default CalculatorScreen;
