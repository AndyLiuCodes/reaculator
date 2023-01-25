import CalculatorButton from "./CalculatorButton";
import { useCalculatorDispatch } from "../../../hooks/CalculatorProvider";

type OperationButtonProp = {
  operation: string;
  opKey?: string;
  customStyle?: object;
};

function OperationButton({
  operation,
  opKey,
  customStyle,
}: OperationButtonProp) {
  return (
    <CalculatorButton
      content={operation}
      onBtnClick={operationDispatch(opKey)}
      customStyle={customStyle}
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
    case "subtract": {
      return () => {
        dispatch({
          type: "subtract",
          payload: "",
        });
      };
    }
    case "multiply": {
      return () => {
        dispatch({
          type: "multiply",
          payload: "",
        });
      };
    }
    case "divide": {
      return () => {
        dispatch({
          type: "divide",
          payload: "",
        });
      };
    }
    case "sqrt": {
      return () => {
        dispatch({
          type: "sqrt",
          payload: "",
        });
      };
    }
    case "squared": {
      return () => {
        dispatch({
          type: "squared",
          payload: "",
        });
      };
    }
    case "multi_inverse": {
      return () => {
        dispatch({
          type: "multi_inverse",
          payload: "",
        });
      };
    }
    case "percent": {
      return () => {
        dispatch({
          type: "percent",
          payload: "",
        });
      };
    }
    case "equals": {
      return () => {
        dispatch({
          type: "equals",
          payload: "",
        });
      };
    }
    case "sign": {
      return () => {
        dispatch({
          type: "sign",
          payload: "",
        });
      };
    }
    case "decimal": {
      return () => {
        dispatch({
          type: "decimal",
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
