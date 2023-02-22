import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container">
      <section className="title">LOGIN</section>
      <section className="inputs">
        <div className="username">
        <input type="text" placeholder="User Name"/>
        </div>
        <div className="userPass">
        <input type="password" name="password" id="password" placeholder="Sua Senha"/>
        </div>
        <div className="button">
        <button>logar</button>
        </div>
      </section>
    </main>
  );
}

export default App;
