import { use, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

const ThemeToggle = () => {
  const { isDark, setIsDark } = use(AuthContext);

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  return (
    <label id="my_modal_1" className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className="toggle"
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
      />
      <span className={`${isDark ? 'text-white' : 'text-black'}`}>{isDark ? "🌙 Dark" : "☀️ Light"}</span>
    </label>
  );
};

export default ThemeToggle;
