import React from "react";
import ServiceList from "./components/ServiceList.js";

function App() {
  return (
    <div className="App" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>My Services App</h1>
      <ServiceList />
    </div>
  );
}

export default App;
