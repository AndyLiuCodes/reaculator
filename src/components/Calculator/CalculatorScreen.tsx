import { useCalculator } from "../../hooks/CalculatorProvider";
import MainContent from "../Elements/Screen/MainContent";
import SubContent from "../Elements/Screen/SubContent";
import "../../assets/css/screen.css";

function CalculatorScreen() {
  const calculator = useCalculator();
  const subContent =
    calculator.operation !== ""
      ? calculator.total + " " + translateSymbol(calculator.operation)
      : "";

  return (
    <div className="calculator-screen">
      <SubContent
        customStyle={{
          height: "30%",
          fontSize: "19px",
        }}
        content={subContent.toString()}
      />
      <MainContent
        customStyle={{
          height: "70%",
          fontSize: "34px",
        }}
        content={calculator.input}
      />
    </div>
  );
}

function translateSymbol(symbolKey: string) {
  if (symbolKey === "add") {
    return "+";
  } else if (symbolKey === "subtract") {
    return "-";
  } else if (symbolKey === "multiply") {
    return "×";
  } else if (symbolKey === "divide") {
    return "/";
  }

  return "";
}

export default CalculatorScreen;
