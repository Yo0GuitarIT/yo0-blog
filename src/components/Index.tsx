import { useEffect, useRef, useState } from "react";

export default function Index({ headings = [] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!headings.length) return null;

  return (
    <div ref={ref}>
      {open && (
        <div className="bg-background fixed bottom-6 z-3 space-y-3 justify-self-end rounded-lg px-6 py-4 select-none">
          <ul className="space-y-1 pb-2">
            {headings.map((h: any) => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  onClick={() => setOpen(false)}
                  className="index"
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="fixed right-[calc((100vw-56rem)/2-1rem)] bottom-6 z-3">
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle table of contents"
          className="bg-foreground/5 rounded-full p-3"
        >
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
            className={`icon icon-tabler icons-tabler-outline icon-tabler-menu ${open ? "opacity-0" : "rotate-180 opacity-100"} absolute`}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 8l16 0" />
            <path d="M4 16l16 0" />
          </svg>
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
            className={`icon icon-tabler icons-tabler-outline icon-tabler-x ${open ? "opacity-100" : "rotate-180 opacity-0"}`}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
