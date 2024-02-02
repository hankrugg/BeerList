import React from "react";
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <div className="topnav">
            <a className="active" href="home">Home</a>
            <Link className={"link"} to={"/allBeers"}> all beers </Link>
        </div>

    );
}