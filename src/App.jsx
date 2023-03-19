import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MainComponent from "./Components/MainComponent";
import SideNavBar from "./Components/SideNavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <SideNavBar></SideNavBar>
      <MainComponent></MainComponent>
    </>
  );
}

export default App;
