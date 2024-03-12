import { useState } from "react";
import Navbar from "./components/Navbar";
import Page from "./pages/Page";

function App() {
  return (
    <div className="app-wrapper flex bg-accent-1 h-dvh ">
      <Navbar />
      <div className="app-content w-screen">
        <Page/>
      </div>
    </div>
  );
}

export default App;
