import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Room from "./components/room";
import Parent from "./components/parent";
import ValueContext from "./components/ValueContext";

import Home from "./components/Home";
import About from "./components/About";
import { Link, Routes, Route, useParams } from "react-router-dom";

function NotFound() {
  return <div>Not Found</div>;
}

function Product() {
  const { productId } = useParams();
  return <div>Hello, {productId}</div>;
}

function Mobile() {
  const { productId } = useParams();
  return <div>Hello mobile, {productId}</div>;
}

function App() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}>
          Hello{" "}
        </Route>
        <Route path="about" element={<About />}>
          About me, <Route path="mobile" element={<Mobile />}></Route>
        </Route>
        <Route path="product/:productId" element={<Product />}>
          About me,{" "}
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
  // const [light, setlight] = useState(false);
  // const [mode, setMode] = useState(false);

  // function changeState() {
  //   console.log("button clicked");
  //   setlight(!light);
  // }

  // let value = useState(48);
  // return (
  //   <ValueContext.Provider value={value}>
  //     <div className={`App ${mode ? "light" : "dark"}`}>
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>This is React App deployed on Surge</p>
  //         <a href="https://google.com">Click to go to google</a>
  //         <button onClick={changeState}>Light On</button>
  //         <br></br>
  //         <button onClick={() => setMode(!mode)}>Change the mode</button>
  //         <p>The light is : {light ? "on" : "off"}</p>
  //       </header>
  //       <Room />

  //       <Parent />
  //     </div>
  //   </ValueContext.Provider>
  // );
}

export default App;
