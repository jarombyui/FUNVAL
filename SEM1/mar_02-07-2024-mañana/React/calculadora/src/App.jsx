import "./App.css";
import { Buttons } from "./components/Buttons";
import { Calculator } from "./components/Calculator";
import { Input } from "./components/Input";

function App() {
  return (
    <Calculator>
      <Input />
      <Buttons />
    </Calculator>
  );
}

export default App;
