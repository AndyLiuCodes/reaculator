import { useReducer, createContext, Dispatch, useContext } from "react";

const MAX_INPUT_SIZE = 16;
const INITIAL_INPUT = "0";
const INITIAL_TOTAL = 0;
const INITIAL_OPERATION = "";

const initialCalculatorState = {
  total: INITIAL_TOTAL,
  operation: INITIAL_OPERATION,
  input: INITIAL_INPUT,
};

type CalculatorProviderProp = {
  children: React.ReactNode;
};

interface CalculatorState {
  total: number;
  operation: string;
  input: string;
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
    action.type === "add" ||
    action.type === "subtract" ||
    action.type === "multiply" ||
    action.type === "divide" ||
    action.type === "equals";

  let nextTotal = isFirstInput
    ? currentInputNumber
    : isCalculationRequired && calculator.operation !== ""
    ? computePending(calculator)
    : currentInputNumber;

  switch (action.type) {
    case "add": {
      return {
        total: nextTotal,
        operation: "add",
        input: INITIAL_INPUT,
      };
    }
    case "subtract": {
      return {
        total: nextTotal,
        operation: "subtract",
        input: INITIAL_INPUT,
      };
    }
    case "multiply": {
      return {
        total: nextTotal,
        operation: "multiply",
        input: INITIAL_INPUT,
      };
    }
    case "divide": {
      if (currentInputNumber === 0) {
        return initialCalculatorState;
      }

      return {
        total: nextTotal,
        operation: "divide",
        input: INITIAL_INPUT,
      };
    }
    case "equals": {
      return {
        total: nextTotal,
        operation: INITIAL_OPERATION,
        input: nextTotal.toString(),
      };
    }
    case "sqrt": {
    }
    case "squared": {
    }
    case "multi_inverse": {
    }
    case "percent": {
    }
    case "decimal": {
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
    case "sign": {
      let toAddNegSign =
        !(calculator.input === "0") || calculator.input[0] === "-";

      return {
        ...calculator,
        input: toAddNegSign
          ? "-" + calculator.input
          : Math.abs(currentInputNumber).toString(),
      };
    }
    case "changed_input": {
      let result;

      if (currentInputString.length >= MAX_INPUT_SIZE) {
        return calculator;
      }

      if (currentInputString === INITIAL_INPUT && digit === "0") {
        result = "0";
      } else if (currentInputString === "0") {
        result = action.payload;
      } else {
        result = currentInputString + action.payload;
      }

      return {
        ...calculator,
        input: result,
      };
    }
    case "deleted_input": {
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
    case "clear": {
      return initialCalculatorState;
    }
    case "clear_entry": {
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
    case "add": {
      return state.total + currentInputValue;
    }
    case "subtract": {
      return state.total - currentInputValue;
    }
    case "multiply": {
      return state.total * currentInputValue;
    }
    case "divide": {
      if (currentInputValue === 0) {
        alert("You cannot divide by 0");
        return 0;
      }
      return state.total / currentInputValue;
    }
  }

  return 0;
}
