import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <Services />
            <Experience />
        </div>
    );
};

export default App;
