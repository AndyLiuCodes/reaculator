import CalculatorButton from "./CalculatorButton";
import { useCalculatorDispatch } from "../../../hooks/CalculatorProvider";

type DigitButtonProps = {
  digit: string;
};

function DigitButton({ digit }: DigitButtonProps) {
  const dispatch = useCalculatorDispatch();

  return (
    <CalculatorButton
      content={digit}
      onBtnClick={() => {
        dispatch({
          type: "changed_input",
          payload: digit,
        });
      }}
    />
  );
}

export default DigitButton;
