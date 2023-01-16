import CalculatorButton from "./CalculatorButton";

type DigitButtonProps = {
  digit: number;
};

function DigitButton({ digit }: DigitButtonProps) {
  return <CalculatorButton content={digit.toString()} />;
}

export default DigitButton;
