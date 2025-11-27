import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("");

  // initialization from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle(
      "light",
      initialTheme === "light",
    );
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  // keep localStorage + document class in sync
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // utility function
  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  // button handler
  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newTheme = theme === "dark" ? "light" : "dark";

    const transition = (document as any).startViewTransition?.(() =>
      changeTheme(newTheme),
    );
    if (!transition) return changeTheme(newTheme);

    const x = event.clientX;
    const y = event.clientY;

    transition.ready.then(() => {
      const path = [
        `circle(0% at ${x}px ${y}px)`,
        `circle(150% at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: theme === "dark" ? path : [...path].reverse(),
        },
        {
          duration: 600,
          easing: "ease-in-out",
          fill: "forwards",
          pseudoElement:
            newTheme === "light"
              ? "::view-transition-new(root)"
              : "::view-transition-old(root)",
        },
      );
    });
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Activate ${theme === "light" ? "dark" : "light"} mode`}
      aria-pressed={theme === "dark"}
      title={`Activate ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-moon active:fill-foreground size-5"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-sun-high active:fill-foreground size-5"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
          <path d="M6.343 17.657l-1.414 1.414" />
          <path d="M6.343 6.343l-1.414 -1.414" />
          <path d="M17.657 6.343l1.414 -1.414" />
          <path d="M17.657 17.657l1.414 1.414" />
          <path d="M4 12h-2" />
          <path d="M12 4v-2" />
          <path d="M20 12h2" />
          <path d="M12 20v2" />
        </svg>
      )}
    </button>
  );
}
