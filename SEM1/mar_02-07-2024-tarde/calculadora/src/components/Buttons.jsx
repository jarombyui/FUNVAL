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
    const target = e.target.value;
    if (target.tagName !== "DIV") {
      if (operators.includes(target)) {
        console.log("Es un operador");
        return;
      }

      if (target === "=") {
        console.log("Es el signo igual");
        return;
      }

      if (target === "AC") {
        console.log("Limpiar display");
        return;
      }

      if (target === "C") {
        console.log("Limpiar one by one");
        return;
      }

      setDisplay(display + target); // toma el valor que tiene actualmente display y sumale lo que el usuario haya presionado
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

// export function Buttons({ display, setDisplay }) {
//   const buttons = [
//     7,
//     8,
//     9,
//     "AC",
//     4,
//     5,
//     6,
//     "C",
//     1,
//     2,
//     3,
//     "/",
//     "-",
//     0,
//     "+",
//     "*",
//     "=",
//   ];
//   const operators = ["/", "-", "+", "*"];

//   function handleClick(e) {
//     const target = e.target;

//     if (operators.includes(target.value)) {
//       console.log("Es un operador");
//       return;
//     }

//     if (target.value === "=") {
//       console.log("Es el signo igual");
//       return;
//     }

//     if (target.value === "AC") {
//       console.log("Limpiar display");
//       return;
//     }

//     if (target.value === "C") {
//       console.log("Limpar one by one");
//       return;
//     }

//     setDisplay(display + target.value); // toma el valor que tiene actualmente display y sumale lo  que el usuario haya presionado

//     return (
//       <div className="buttons" onClick={handleClick}>
//         {buttons.map((button) => (
//           <button key={button} value={button}>
//             {button}
//           </button> //el key se debe de colocar si o si si no sale un error en la consola
//         ))}
//       </div>
//     );
//   }
// }
