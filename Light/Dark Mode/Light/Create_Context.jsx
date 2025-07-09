import { useScroll } from "motion/react";
import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(() => {
        const storedDarkMode = localStorage.getItem("darkMode"); // Get value from local storage
        if (storedDarkMode === null || storedDarkMode === "undefined") {
            return false; // Default to false if nothing valid is stored
        }

        try {
            // Attempt to parse the stored value.
            // If it's something like "true" or "false" (string), JSON.parse will convert it to boolean.
            return JSON.parse(storedDarkMode);
        } catch (e) {
            // If parsing fails (e.g., malformed JSON), log the error and default to false
            console.error("Error parsing darkMode from localStorage:", e, "Stored value:", storedDarkMode);
            return false;
        }
    });

    const toggleDarkMode = () => setDarkMode(prev => !prev); //to toggle between the Mode true/false

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode])

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}