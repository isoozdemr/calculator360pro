"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function TurkeyScientificCalculator() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "×":
        return firstValue * secondValue;
      case "÷":
        return firstValue / secondValue;
      case "=":
        return secondValue;
      default:
        return secondValue;
    }
  };

  const handleFunction = (func: string) => {
    const value = parseFloat(display);
    let result: number;

    switch (func) {
      case "sin":
        result = Math.sin(value * (Math.PI / 180));
        break;
      case "cos":
        result = Math.cos(value * (Math.PI / 180));
        break;
      case "tan":
        result = Math.tan(value * (Math.PI / 180));
        break;
      case "log":
        result = Math.log10(value);
        break;
      case "ln":
        result = Math.log(value);
        break;
      case "√":
        result = Math.sqrt(value);
        break;
      case "x²":
        result = value * value;
        break;
      case "1/x":
        result = 1 / value;
        break;
      default:
        return;
    }

    setDisplay(String(result));
    setWaitingForOperand(true);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
        <div className="space-y-4">
          <div className="bg-[#0f172a] rounded-lg p-4 min-h-[80px] flex items-center justify-end">
            <div className="text-right">
              <p className="text-3xl font-mono text-white font-bold break-all">{display}</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="grid grid-cols-5 gap-2">
              {["sin", "cos", "tan", "log", "ln"].map((func) => (
                <Button
                  key={func}
                  onClick={() => handleFunction(func)}
                  variant="outline"
                  size="sm"
                  className="text-xs font-medium"
                >
                  {func}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-5 gap-2">
              {["√", "x²", "1/x"].map((func) => (
                <Button
                  key={func}
                  onClick={() => handleFunction(func)}
                  variant="outline"
                  size="sm"
                  className="text-xs font-medium"
                >
                  {func}
                </Button>
              ))}
              <Button
                onClick={clear}
                variant="outline"
                size="sm"
                className="col-span-2 font-medium bg-[#fee2e2] hover:bg-[#fecaca] text-[#dc2626] border-[#fca5a5]"
              >
                Temizle
              </Button>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {[7, 8, 9, "÷"].map((item) => (
                <Button
                  key={item}
                  onClick={() => (typeof item === "number" ? inputNumber(String(item)) : performOperation(item))}
                  variant={typeof item === "number" ? "outline" : "primary"}
                  size="sm"
                  className="font-medium"
                >
                  {item}
                </Button>
              ))}

              {[4, 5, 6, "×"].map((item) => (
                <Button
                  key={item}
                  onClick={() => (typeof item === "number" ? inputNumber(String(item)) : performOperation(item))}
                  variant={typeof item === "number" ? "outline" : "primary"}
                  size="sm"
                  className="font-medium"
                >
                  {item}
                </Button>
              ))}

              {[1, 2, 3, "-"].map((item) => (
                <Button
                  key={item}
                  onClick={() => (typeof item === "number" ? inputNumber(String(item)) : performOperation(item))}
                  variant={typeof item === "number" ? "outline" : "primary"}
                  size="sm"
                  className="font-medium"
                >
                  {item}
                </Button>
              ))}

              <Button onClick={() => inputNumber("0")} variant="outline" size="sm" className="font-medium">
                0
              </Button>
              <Button onClick={inputDecimal} variant="outline" size="sm" className="font-medium">
                .
              </Button>
              <Button onClick={() => performOperation("+")} variant="primary" size="sm" className="font-medium">
                +
              </Button>
              <Button
                onClick={() => performOperation("=")}
                variant="primary"
                size="sm"
                className="col-span-2 font-medium bg-[#2563eb] hover:bg-[#1d4ed8]"
              >
                =
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
