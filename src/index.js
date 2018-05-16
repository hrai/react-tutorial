import React from "react";
import ReactDOM from "react-dom";
import Games from "./Games.jsx";
import Clock from "./Clock.jsx";
import "./index.css";

ReactDOM.render(
    <div>
        <Games />
        <Clock />
    </div>, document.getElementById("root"));
