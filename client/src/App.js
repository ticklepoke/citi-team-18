import React from "react";
import "./App.css";
import Router from "./Router";
const App = () => (
    <div className="App">
        <nav className="banner-gradient">
            <img
                src={require("./assets/citiwhite.png")}
                height="40px"
                alt="Citi"
            />
        </nav>

        <Router />
    </div>
);

export default App;
