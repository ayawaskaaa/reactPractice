import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => (
    <header>
        <h1> Expensify </h1>
        <div><NavLink to="/">Dashboard</NavLink></div>
        <div><NavLink to="/create">Create expense</NavLink></div>
        <div><NavLink to="/edit">Edit expense</NavLink></div>
        <div><NavLink to="/help">Help</NavLink></div>
    </header>
);

export default Header;