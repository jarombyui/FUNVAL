export function Buttons() {
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

  return (
    <div className="buttons">
      {buttons.map((button) => (
        <button key={button} value={button}>{button}</button> //el key se debe de colocar si o si si no sale un error en la consola
      ))}
    </div>
  );
}
