import CalculatorButton from "./CalculatorButton";

type OperationButtonProp = {
  operation: string;
};

function OperationButton({ operation }: OperationButtonProp) {
  return <CalculatorButton content={operation} />;
}

export default OperationButton;
