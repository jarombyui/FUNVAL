import React from "react";

export function Buttons({ display, setDisplay }) {
  const buttons = [
    7,
    8,
    9,
    "AC",
    4,
    5,
    6,
    "C",
    1,
    2,
    3,
    "/",
    "-",
    0,
    "+",
    "*",
    "=",
  ];
  const operators = ["/", "-", "+", "*"];

  function handleClick(e) {
    const target = e.target;
    const last_entry = display[display.length - 1];

    if (target.tagName !== "DIV") {
      if (operators.includes(target.value) && operators.includes(last_entry)) {
        let newOperator = display.slice(0, display.length - 1) + target.value;

        setDisplay(newOperator);
        return;
      }

      if (target.value === "=") {
        console.log("Es el signo igual");
        return;
      }

      if (target.value === "AC") {
        setDisplay("");
        return;
      }

      if (target.value === "C") {
        setDisplay(display.slice(0, display.length - 1));
        return;
      }
      if (display === "" && operators.includes(target.value)) {
        return;
      }

      setDisplay(display + target.value); // toma el valor que tiene actualmente display y sumale lo que el usuario haya presionado
    }
  }

  return (
    <div className="buttons" onClick={handleClick}>
      {buttons.map((button) => (
        <button key={button} value={button}>
          {button}
        </button> //el key se debe de colocar si o si si no sale un error en la consola
      ))}
    </div>
  );
}
