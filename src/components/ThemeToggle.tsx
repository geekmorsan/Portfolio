import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

function userPreferredTheme(): string | null {
  if (typeof window === "undefined") {
    return null;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function storedValue(key: string) {
  if (typeof localStorage === "undefined") {
    return null;
  }
  return localStorage.getItem(key);
}

function chosenTheme() {
  return storedValue("theme") ?? userPreferredTheme() ?? "light";
}
function switchPosition(theme: string) {
  if (theme === "dark") {
    return (<div className="
      content-[''] absolute inset-y-0.5 left-0.5
      bg-accent-1-light border-accent-1-light border rounded-full h-5 w-5 transition-all
       "></div>);
  } else {
    return (<div className="
      content-[''] absolute inset-y-0.5 right-0.5
      bg-accent-1-light border-accent-1-light border rounded-full h-5 w-5 transition-all
       "></div>);
  }
}
function buttonIcon(theme: string) {
  if (theme === "dark") {
    return (<MoonIcon className="size-8 text-blue-950"/>);
  } else {
    return (<SunIcon className="size-8 text-yellow-50"/>);
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(chosenTheme());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme);
  }, [theme]);


  return (
    <div>
    <button type="button" data-theme-set="dark" onClick={()=>{setTheme("dark")}}>{buttonIcon("dark")}</button>
    <button type="button" data-theme-set="light" onClick={()=>{setTheme("light")}}>{buttonIcon("light")}</button>
        {/*<div className="relative w-11 h-6 bg-accent-1-dark ring-1 ring-outline hover:ring-accent-2-light
         rounded-full
         ">{switchPosition(theme)}</div>*/}
         </div>
);
}
