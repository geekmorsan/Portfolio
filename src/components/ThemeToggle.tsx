import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState<Boolean|null>(null);

  useEffect(() => {
    if (darkMode === null) {
      return
    }
    const theme = darkMode ? "dark" : "light"
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme);
  }, [darkMode]);


  return (
    <label className="inline-flex relative items-center cursor-pointer">
      <input type="checkbox" id="theme-toggle-checkbox" className="sr-only peer"
        onChange={e => setDarkMode(e.currentTarget.checked)}/>
      <div aria-hidden="true" className="w-[4.5rem] h-9 bg-accent-1 peer-focus:outline-none ring-1 shadow-inner shadow-gray-900 ring-button peer-hover:ring-button-hue
             rounded-full " />
      <div id="theme-toggle-ball" className="absolute top-0.5 start-0.5
  peer-checked:translate-x-9 rtl:peer-checked:-translate-x-9
  bg-button bg-gradient-to-t dark:bg-gradient-to-b from-button-hue via-transparent to-transparent shadow shadow-gray-900 rounded-full size-8 transition-all">
        <span className="sr-only">Use dark theme</span>
      </div>
      <SunIcon aria-hidden="true" className="absolute stroke-accent-1-light inset-y-1.5 left-1.5 size-6" />
      <MoonIcon aria-hidden="true" className="absolute stroke-accent-1-light inset-y-1.5 right-1.5 size-6" />
    </label>
  );
}
