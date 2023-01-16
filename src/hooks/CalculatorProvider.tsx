import {
  CalculatorContext,
  CalculatorDispatchContext,
} from "../providers/CalculatorProvider";
import { useContext } from "react";

export function useCalculator() {
  return useContext(CalculatorContext);
}

export function useCalculatorDispatch() {
  return useContext(CalculatorDispatchContext);
}
