import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import InputForm from "./components/InputForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <h1>Welcome to ReactJS</h1>
        <h2>Best Place on Earth to Learn ReactJS</h2>
        <div>
          <InputForm />
        </div>
      </div>
    </div>
  );
}

export default App;
