import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import "./ThemeToggle.scss";
import { setTheme as setThemeActions } from "../../Theme/themeSlice";

export default function ThemeToggle({ themeToggle }) {
    const [theme, setTheme] = useState(themeToggle);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setThemeActions(theme));
    }, [theme]);

    function handleChange(event) {
        setTheme(event.target.checked ? "lightTheme" : "darkTheme");
    }

    return (
        <div className={"ThemeToggle " + theme}>
            <div className="container">
                <div className="switch">
                    <label htmlFor="toggle">
                        <input
                            id="toggle"
                            className="toggle-switch"
                            type="checkbox"
                            defaultChecked={theme !== "darkTheme"}
                            onChange={handleChange}
                        />
                        <div className="sun-moon">
                            <div className="dots"></div>
                        </div>
                        <div className="background">
                            <div className="stars1"></div>
                            <div className="stars2"></div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}
