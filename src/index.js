import React from "react";
import ReactDOM from "react-dom";
import Games from "./Games.jsx";
import Clock from "./Clock.jsx";
import Toggle from "./Toggle.jsx";
import "./index.css";

ReactDOM.render(
    <div>
        <Games />
        <Clock />
        <Toggle />
    </div>, document.getElementById("root"));
