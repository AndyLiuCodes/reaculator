import CalculatorButton from "./CalculatorButton";
import { useCalculatorDispatch } from "../../../hooks/CalculatorProvider";

type OperationButtonProp = {
  operation: string;
  opKey?: string;
};

function OperationButton({ operation, opKey }: OperationButtonProp) {
  return (
    <CalculatorButton
      content={operation}
      onBtnClick={operationDispatch(opKey)}
    />
  );
}

function operationDispatch(operation?: string) {
  const dispatch = useCalculatorDispatch();

  switch (operation) {
    case "add": {
      return () => {
        dispatch({
          type: "add",
          payload: "",
        });
      };
    }
    case "delete": {
      return () => {
        dispatch({
          type: "deleted_input",
          payload: "",
        });
      };
    }
    case "clear": {
      return () => {
        dispatch({
          type: "clear",
          payload: "",
        });
      };
    }
    case "clear_entry": {
      return () => {
        dispatch({
          type: "clear_entry",
          payload: "",
        });
      };
    }
  }
}

export default OperationButton;
