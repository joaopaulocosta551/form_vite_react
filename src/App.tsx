import { useState } from "react";
import "./App.css";
import {Input} from "./components/Input";
import { Button } from "./components/Button";


function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container">
      <Input type="text"  placeholder="Seu Email"/>
      
      <Button />
    </main>
    
  );
}

export default App;
