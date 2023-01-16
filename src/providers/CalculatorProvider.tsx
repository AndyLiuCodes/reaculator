import { useReducer, createContext, Dispatch, useContext } from "react";

const initialCalculatorState = {
  total: 0,
  operation: "",
  input: "0",
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
  switch (action.type) {
    case "changed_input": {
      const currentInput = calculator.input;
      const digit = action.payload;
      let result;

      if (currentInput === "0" && digit === "0") {
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
  }
  return calculator;
}
