// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import Error from "./Pages/Error";
import Navbar from "./Components/Navbar";
import SingleRoom from "./Pages/SingleRoom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/rooms/" Component={Rooms} />
        <Route path="/rooms/:slug/" Component={SingleRoom} />
        <Route path="/error/" Component={Error} />
      </Routes>
    </>
  );
}

export default App;
