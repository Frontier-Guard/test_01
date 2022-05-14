import React from "react";
import './styles.css';
import { Link } from "react-router-dom";

export default function TheHeader(props) {
    return (
        <React.Fragment>
            <header className="TheHeader">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/main">Main</Link>
                        </li>
                        <li>
                            <Link to="/button">Button</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </React.Fragment>
    );
}