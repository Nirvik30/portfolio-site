"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navigation } from "@/data/portfolio";

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const initialTheme = storedTheme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = initialTheme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", initialTheme === "dark" ? "#151513" : "#f5f3ee");
    const frame = window.requestAnimationFrame(() => setTheme(initialTheme));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const sections = navigation
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -55%", threshold: [0, 0.2, 0.5, 0.8] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.dataset.menuOpen = String(menuOpen);
    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    root.classList.add("theme-changing");
    root.dataset.theme = nextTheme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", nextTheme === "dark" ? "#151513" : "#f5f3ee");
    window.localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
    window.setTimeout(() => root.classList.remove("theme-changing"), 420);
  };

  return (
    <>
      <header className="site-header">
        <a className="nav-home" href="#home" aria-label="Nirvik Acharekar, home">NA</a>
        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
          {navigation.map((item) => {
            const section = item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === section ? "is-active" : undefined}
                aria-current={activeSection === section ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <span key={theme} className="theme-toggle-icon" aria-hidden="true">
              {theme === "dark" ? <Sun /> : <Moon />}
            </span>
          </button>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>
    </>
  );
}
