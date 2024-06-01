import React from "react";

//Header component
export default function Header() {
    return (
        <header>
            <img className="header--globe" src="images/globe.png" />
            <h3 className="header--name">My Travel Journal.</h3>
        </header>
    );
}
