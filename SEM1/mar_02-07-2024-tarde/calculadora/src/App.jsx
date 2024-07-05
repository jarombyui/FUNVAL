import { useState } from "react";
import "./App.css";
import { Buttons } from "./components/Buttons";
import { Calculator } from "./components/Calculator";
import { Input } from "./components/Input";

function App() {
  const [display, setDisplay] = useState("");

  return (
    <Calculator>
      <Input display = {display}/>
      <Buttons 
        display = {display} 
        setDisplay = {setDisplay} />
    </Calculator>
  );
}

export default App;
