import BottomBar from "./components/BottomBar";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import {BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter >
      <div className="wrapper">
        <Sidebar/>
        <Content/>
      </div>
      <BottomBar/>
    </BrowserRouter >
  );
}

