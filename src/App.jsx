import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Intro from "./components/Intro/Intro";
const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Intro />
        </div>
    );
};

export default App;
