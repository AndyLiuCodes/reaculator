import CalculatorScreen from "./CalculatorScreen";
import CalculatorButtons from "./CalculatorButtons";
import { CalculatorProvider } from "../../providers/CalculatorProvider";
import "../../assets/css/calculator.css";

function CalculatorBody() {
  return (
    <CalculatorProvider>
      <div className="calculator-body">
        <CalculatorScreen />
        <CalculatorButtons />
      </div>
    </CalculatorProvider>
  );
}

export default CalculatorBody;
