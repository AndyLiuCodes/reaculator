import DigitButton from "../Elements/Button/DigitButton";
import OperationButton from "../Elements/Button/OperationButton";
import * as OperationConstants from "../../constants/DispatchOperationKeys";

function CalculatorButtons() {
  return (
    <div className="calculator-buttons">
      <OperationButton operation={"%"} opKey={OperationConstants.PERCENT} />
      <OperationButton
        operation={"CE"}
        opKey={OperationConstants.CLEAR_ENTRY}
      />
      <OperationButton operation={"C"} opKey={OperationConstants.CLEAR} />
      <OperationButton operation={"DEL"} opKey={OperationConstants.DELETE} />

      <OperationButton
        operation={"1/x"}
        opKey={OperationConstants.MULTI_INVERSE}
      />
      <OperationButton operation={"x²"} opKey={OperationConstants.SQUARED} />
      <OperationButton operation={"√"} opKey={OperationConstants.SQRT} />
      <OperationButton operation={"÷"} opKey={OperationConstants.DIVIDE} />

      <DigitButton digit={"7"} />
      <DigitButton digit={"8"} />
      <DigitButton digit={"9"} />
      <OperationButton operation={"×"} opKey={OperationConstants.MULTIPLY} />

      <DigitButton digit={"4"} />
      <DigitButton digit={"5"} />
      <DigitButton digit={"6"} />
      <OperationButton operation={"-"} opKey={OperationConstants.SUBTRACT} />

      <DigitButton digit={"1"} />
      <DigitButton digit={"2"} />
      <DigitButton digit={"3"} />
      <OperationButton operation={"+"} opKey={OperationConstants.ADD} />

      <OperationButton operation={"+/-"} opKey={OperationConstants.SIGN} />
      <DigitButton digit={"0"} />
      <OperationButton operation={"."} opKey={OperationConstants.DECIMAL} />
      <OperationButton
        operation={"="}
        opKey={OperationConstants.EQUALS}
        customStyle={{ backgroundColor: "#007FFF" }}
      />
    </div>
  );
}

export default CalculatorButtons;
