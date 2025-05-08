import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

export function AccessibilityMenu() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div
      style={{
        position: "fixed",
        top: 10,
        right: 10,
        background: "#eee",
        padding: "10px",
        borderRadius: "8px",
        zIndex: 999,
      }}
    >
      <button onClick={toggleTheme}>
        Tema: {theme === "ligth" ? "Clao" : "Escuro"}
      </button>
      <br />
      <button onClick={toggleLanguage}>
        {" "}
        Idioma: {language === "pt" ? "br PT" : "us EN"}
      </button>
    </div>
  );
}
