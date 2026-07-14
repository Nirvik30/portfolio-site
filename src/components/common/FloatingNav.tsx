"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { links, navigation } from "@/data/portfolio";

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <header className="site-header">
      <a className="brand-mark" href="#home" aria-label="Nirvik Acharekar, home">
        <span>NA</span>
        <span className="brand-copy">Nirvik Acharekar</span>
      </a>

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

      <a className="header-cta" href={links.email}>
        Let&apos;s talk <ArrowUpRight aria-hidden="true" />
      </a>

      <button
        className="menu-toggle"
        type="button"
        onClick={() => setMenuOpen((current) => !current)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
    </header>
  );
}
