import DigitButton from "../Elements/Button/DigitButton";
import CalculatorButton from "../Elements/Button/CalculatorButton";
import EqualButton from "../Elements/Button/EqualButton";
import OperationButton from "../Elements/Button/OperationButton";

function CalculatorButtons() {
  return (
    <div className="calculator-buttons">
      <OperationButton operation={"%"} />
      <OperationButton operation={"CE"} />
      <OperationButton operation={"C"} />
      <OperationButton operation={"DEL"} />

      <OperationButton operation={"1/x"} />
      <OperationButton operation={"x²"} />
      <OperationButton operation={"√"} />
      <OperationButton operation={"÷"} />

      <DigitButton digit={7} />
      <DigitButton digit={8} />
      <DigitButton digit={9} />
      <OperationButton operation={"×"} />

      <DigitButton digit={4} />
      <DigitButton digit={5} />
      <DigitButton digit={6} />
      <OperationButton operation={"-"} />

      <DigitButton digit={1} />
      <DigitButton digit={2} />
      <DigitButton digit={3} />
      <OperationButton operation={"+"} />

      <OperationButton operation={"+/-"} />
      <DigitButton digit={0} />
      <OperationButton operation={"."} />
      <EqualButton />
    </div>
  );
}

export default CalculatorButtons;
