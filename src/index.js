import React from "react";
import ReactDOM from "react-dom";
import Games from "./Games.jsx";
import Clock from "./Clock.jsx";
import Toggle from "./Toggle.jsx";
import NameForm from "./NameForm.jsx";
import "./index.css";

ReactDOM.render(
    <div>
        <Games />
        <Clock />
        <Toggle />
        <NameForm />
    </div>, document.getElementById("root"));
