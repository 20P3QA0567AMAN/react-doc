import React from "react";
import Foreground from "./components/Foreground";
import Bgscreen from "./components/Bgscreen";

function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-800 ">
      <Bgscreen />
      <Foreground />
    </div>  
  );
}

export default App;
