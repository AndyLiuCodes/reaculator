import CalculatorButton from "./CalculatorButton";
import { useCalculatorDispatch } from "../../../hooks/CalculatorProvider";
import * as OperationConstants from "../../../constants/DispatchOperationKeys";
import {
  ADD,
  CLEAR,
  CLEAR_ENTRY,
  DECIMAL,
  DELETE,
  EQUALS,
  SIGN,
  SUBTRACT,
} from "../../../constants/DispatchOperationKeys";

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
    case OperationConstants.ADD: {
      return () => {
        dispatch({
          type: operation,
          payload: "",
        });
      };
    }
    case OperationConstants.SUBTRACT: {
      return () => {
        dispatch({
          type: operation,
          payload: "",
        });
      };
    }
    case OperationConstants.MULTIPLY: {
      return () => {
        dispatch({
          type: operation,
          payload: "",
        });
      };
    }
    case OperationConstants.DIVIDE: {
      return () => {
        dispatch({
          type: operation,
          payload: "",
        });
      };
    }
    case OperationConstants.SQRT: {
      return () => {
        dispatch({
          type: operation,
          payload: "",
        });
      };
    }
    case OperationConstants.SQUARED: {
      return () => {
        dispatch({
          type: operation,
          payload: "",
        });
      };
    }
    case OperationConstants.MULTI_INVERSE: {
      return () => {
        dispatch({
          type: operation,
          payload: "",
        });
      };
    }
    case OperationConstants.PERCENT: {
      return () => {
        dispatch({
          type: operation,
          payload: "",
        });
      };
    }
    case OperationConstants.SIGN: {
      return () => {
        dispatch({
          type: operation,
          payload: "",
        });
      };
    }
    case OperationConstants.DECIMAL: {
      return () => {
        dispatch({
          type: operation,
          payload: "",
        });
      };
    }
    case OperationConstants.EQUALS: {
      return () => {
        dispatch({
          type: operation,
          payload: "",
        });
      };
    }
    case OperationConstants.DELETE: {
      return () => {
        dispatch({
          type: operation,
          payload: "",
        });
      };
    }
    case OperationConstants.CLEAR: {
      return () => {
        dispatch({
          type: operation,
          payload: "",
        });
      };
    }
    case OperationConstants.CLEAR_ENTRY: {
      return () => {
        dispatch({
          type: operation,
          payload: "",
        });
      };
    }
  }
}

export default OperationButton;
