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
  const currentTotal = calculator.total;
  const currentInput = calculator.input;
  const digit = action.payload;
  switch (action.type) {
    case "add": {
      return {
        total: currentTotal + parseFloat(currentInput),
        operation: "add",
        input: INITIAL_INPUT,
      };
    }
    case "subtract": {
    }
    case "multiply": {
    }
    case "divide": {
    }
    case "equals": {
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
    }
    case "sign": {
    }
    case "changed_input": {
      let result;

      if (currentInput.length >= MAX_INPUT_SIZE) {
        return calculator;
      }

      if (currentInput === INITIAL_INPUT && digit === "0") {
        result = "0";
      } else if (currentInput === "0") {
        result = action.payload;
      } else {
        result = calculator.input + action.payload;
      }

      return {
        ...calculator,
        input: result,
      };
    }
    case "deleted_input": {
      if (currentInput.length === 1) {
        return {
          ...calculator,
          input: INITIAL_INPUT,
        };
      }

      return {
        ...calculator,
        input: currentInput.slice(0, -1),
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
