import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import React, { useEffect, useState } from "react";
import SideBar from "./components/Mobile/SideBar/SideBar";

function App() {
  const [mobileSideBar, setMobileSideBar] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    if (windowSize >= 640) {
      setMobileSideBar(false);
    }
  }, [windowSize]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div>
      {/* Mobile side bar */}
      {mobileSideBar ? <SideBar setMobileSideBar={setMobileSideBar} /> : null}
      <Header setMobileSideBar={setMobileSideBar} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
