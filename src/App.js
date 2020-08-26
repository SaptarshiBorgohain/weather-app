import React from "react";
import WeatherEngine from "./components/WeatherEngine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="topbar">
        <WeatherEngine location="sydney, au" />
        <WeatherEngine location="Delhi, in" />
      </div>
    </div>
  );
}

export default App;
