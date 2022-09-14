//ThemeToggle.js
import { useContext } from "react";
import { BsMoon } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import { ThemeContext } from "../context/ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <ImSun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-400 dark:text-pink-800 text-2xl cursor-pointer"
        />
      ) : (
        <BsMoon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-black dark:text-black text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;
