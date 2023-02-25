import { useState } from "react";
import "./App.css";
import {Input} from "./components/Input";
import { Button } from "./components/Button";



function App() {
  const [count, setCount] = useState(0);
  

  return (
    <main className="container">
      <section className="title">
        <h1>Sing Up</h1>
        <p>Let's get started with your 30 days free trial</p>
      </section>
      <form action="#">
      <section className="inputs">
        <Input type="name" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" hasEye={true} capslockDetect={true} />
        <section className="buttonLink">
          <Button value="Sign Up"/>
          <p>Already have an account? <a href="#">Log In</a></p>
        </section>
       
      </section>
      </form>
    </main>
  );
}

export default App;
