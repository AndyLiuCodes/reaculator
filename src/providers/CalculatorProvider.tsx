import { useReducer, createContext, Dispatch } from "react";
import * as OperationConstants from "../constants/DispatchOperationKeys";

const MAX_INPUT_SIZE = 16;
const INITIAL_INPUT = "0";
const INITIAL_TOTAL = 0;
const INITIAL_OPERATION = "";

const initialCalculatorState = {
  total: INITIAL_TOTAL,
  operation: INITIAL_OPERATION,
  input: INITIAL_INPUT,
  clearInput: false,
};

type CalculatorProviderProp = {
  children: React.ReactNode;
};

interface CalculatorState {
  total: number;
  operation: string;
  input: string;
  clearInput: boolean;
}

interface CalculatorAction {
  type: string;
  payload: string;
}

export const CalculatorContext = createContext<CalculatorState>(
  initialCalculatorState
);
export const CalculatorDispatchContext = createContext<
  Dispatch<CalculatorAction>
>(() => null);

export function CalculatorProvider({ children }: CalculatorProviderProp) {
  const [calculator, dispatch] = useReducer(
    calculatorReducer,
    initialCalculatorState
  );

  return (
    <CalculatorContext.Provider value={calculator}>
      <CalculatorDispatchContext.Provider value={dispatch}>
        {children}
      </CalculatorDispatchContext.Provider>
    </CalculatorContext.Provider>
  );
}

function calculatorReducer(
  calculator: CalculatorState,
  action: CalculatorAction
) {
  const currentInputString = calculator.input;
  const currentInputNumber = parseFloat(currentInputString);
  const digit = action.payload;
  const isFirstInput =
    calculator.operation === initialCalculatorState.operation &&
    calculator.total === initialCalculatorState.total;
  const isCalculationRequired =
    action.type === OperationConstants.ADD ||
    action.type === OperationConstants.SUBTRACT ||
    action.type === OperationConstants.MULTIPLY ||
    action.type === OperationConstants.DIVIDE ||
    action.type === OperationConstants.EQUALS;

  let nextTotal = isFirstInput
    ? currentInputNumber
    : isCalculationRequired && calculator.operation !== ""
    ? computePending(calculator)
    : currentInputNumber;

  switch (action.type) {
    case OperationConstants.ADD: {
      return {
        total: nextTotal,
        operation: action.type,
        input: INITIAL_INPUT,
        clearInput: false,
      };
    }
    case OperationConstants.SUBTRACT: {
      return {
        total: nextTotal,
        operation: action.type,
        input: INITIAL_INPUT,
        clearInput: false,
      };
    }
    case OperationConstants.MULTIPLY: {
      return {
        total: nextTotal,
        operation: action.type,
        input: INITIAL_INPUT,
        clearInput: false,
      };
    }
    case OperationConstants.DIVIDE: {
      return {
        total: nextTotal,
        operation: action.type,
        input: INITIAL_INPUT,
        clearInput: false,
      };
    }
    case OperationConstants.EQUALS: {
      return {
        total: nextTotal,
        operation: INITIAL_OPERATION,
        input: nextTotal.toString(),
        clearInput: true,
      };
    }
    case OperationConstants.SQRT: {
      if (currentInputNumber < 0) {
        alert("You cannot square root a negative number");
        return initialCalculatorState;
      }
      return {
        ...calculator,
        input: Math.sqrt(currentInputNumber).toString(),
        clearInput: true,
      };
    }
    case OperationConstants.SQUARED: {
      return {
        ...calculator,
        input: Math.pow(currentInputNumber, 2).toString(),
        clearInput: true,
      };
    }
    case OperationConstants.MULTI_INVERSE: {
      if (currentInputNumber === 0) {
        alert("You cannot divide by 0");
        return initialCalculatorState;
      }

      return {
        ...calculator,
        input: (1 / currentInputNumber).toString(),
        clearInput: true,
      };
    }
    case OperationConstants.PERCENT: {
      return {
        ...calculator,
        input: ((calculator.total * currentInputNumber) / 100).toString(),
        clearInput: true,
      };
    }
    case OperationConstants.DECIMAL: {
      let nextInput;
      if (currentInputString[currentInputString.length - 1] === ".") {
        nextInput = currentInputString.slice(0, -1);
      } else if (currentInputString.includes(".")) {
        return calculator;
      } else {
        nextInput = currentInputString + ".";
      }

      return {
        ...calculator,
        input: nextInput,
      };
    }
    case OperationConstants.SIGN: {
      let toAddNegSign = Math.sign(currentInputNumber) === 1;

      return {
        ...calculator,
        input: toAddNegSign
          ? "-" + calculator.input
          : Math.abs(currentInputNumber).toString(),
      };
    }
    case OperationConstants.CHANGED_INPUT: {
      let result;

      if (
        currentInputString.length >= MAX_INPUT_SIZE &&
        !calculator.clearInput
      ) {
        return calculator;
      }

      if (currentInputString === INITIAL_INPUT && digit === "0") {
        result = "0";
      } else if (currentInputString === "0" || calculator.clearInput) {
        result = action.payload;
      } else {
        result = currentInputString + action.payload;
      }

      return {
        ...calculator,
        input: result,
        clearInput: false,
      };
    }
    case OperationConstants.DELETE: {
      if (currentInputString.length === 1) {
        return {
          ...calculator,
          input: INITIAL_INPUT,
        };
      }

      return {
        ...calculator,
        input: currentInputString.slice(0, -1),
      };
    }
    case OperationConstants.CLEAR: {
      return initialCalculatorState;
    }
    case OperationConstants.CLEAR_ENTRY: {
      return {
        ...calculator,
        input: INITIAL_INPUT,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

function computePending(state: CalculatorState) {
  if (state.operation === "") return state.total;
  const currentInputValue = parseFloat(state.input);
  switch (state.operation) {
    case OperationConstants.ADD: {
      return state.total + currentInputValue;
    }
    case OperationConstants.SUBTRACT: {
      return state.total - currentInputValue;
    }
    case OperationConstants.MULTIPLY: {
      return state.total * currentInputValue;
    }
    case OperationConstants.DIVIDE: {
      if (currentInputValue === 0) {
        alert("You cannot divide by 0");
        return 0;
      }
      return state.total / currentInputValue;
    }
  }

  return 0;
}
