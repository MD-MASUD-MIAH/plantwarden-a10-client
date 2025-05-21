import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className="toggle"
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
      />
      <span>{isDark ? "🌙 Dark" : "☀️ Light"}</span>
    </label>
  );
};

export default ThemeToggle;
