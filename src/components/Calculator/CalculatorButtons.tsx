import DigitButton from "../Elements/Button/DigitButton";
import OperationButton from "../Elements/Button/OperationButton";

function CalculatorButtons() {
  return (
    <div className="calculator-buttons">
      <OperationButton operation={"%"} />
      <OperationButton operation={"CE"} opKey={"clear_entry"} />
      <OperationButton operation={"C"} opKey={"clear"} />
      <OperationButton operation={"DEL"} opKey={"delete"} />

      <OperationButton operation={"1/x"} />
      <OperationButton operation={"x²"} />
      <OperationButton operation={"√"} />
      <OperationButton operation={"÷"} opKey={"divide"} />

      <DigitButton digit={"7"} />
      <DigitButton digit={"8"} />
      <DigitButton digit={"9"} />
      <OperationButton operation={"×"} opKey={"multiply"} />

      <DigitButton digit={"4"} />
      <DigitButton digit={"5"} />
      <DigitButton digit={"6"} />
      <OperationButton operation={"-"} opKey={"subtract"} />

      <DigitButton digit={"1"} />
      <DigitButton digit={"2"} />
      <DigitButton digit={"3"} />
      <OperationButton operation={"+"} opKey={"add"} />

      <OperationButton operation={"+/-"} opKey={"sign"} />
      <DigitButton digit={"0"} />
      <OperationButton operation={"."} opKey={"decimal"} />
      <OperationButton
        operation={"="}
        opKey={"equals"}
        customStyle={{ backgroundColor: "#007FFF" }}
      />
    </div>
  );
}

export default CalculatorButtons;
