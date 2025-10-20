import React, { useState, useEffect } from "react";

const Logo = () => (
  <svg
    viewBox="0 0 100 100"
    className="logo-svg w-10 h-10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z"
      className="logo-outer-hex"
    />
    <path
      d="M50 15L80 32.5V67.5L50 85L20 67.5V32.5L50 15Z"
      className="logo-inner-hex"
    />
    <path
      d="M35 35V65H45C52 65 58 60 58 50C58 40 52 35 45 35H35Z"
      className="logo-d"
    />
    <path
      d="M40 40V60H45C48.5 60 52 57 52 50C52 43 48.5 40 45 40H40Z"
      className="logo-d-inner"
    />
    <path d="M62 42L67 50L62 58" className="logo-bracket" />
    <path d="M28 42L23 50L28 58" className="logo-bracket" />
    <circle cx="50" cy="23" r="2" className="logo-dot" />
    <circle cx="50" cy="77" r="2" className="logo-dot" />
  </svg>
);
const SunIcon = () => (
  <svg
    className="w-6 h-6 text-teal-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);
const MoonIcon = () => (
  <svg
    className="w-6 h-6 text-teal-700"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { href: "#hero", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#services", label: "Serviços" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <header
      id="header"
      className="fixed top-0 w-full backdrop-blur-md border-b-2 z-50 shadow-sm"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <Logo />
            <span className="text-xl font-bold bg-gradient-to-r from-teal-700 via-teal-500 to-teal-700 bg-clip-text text-transparent">
              DEVELOPS
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-800 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleThemeSwitch}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <a href="#contact" className="btn btn-primary">
              Fale Conosco
            </a>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleThemeSwitch}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="mobile-menu active md:hidden pt-4 pb-2 flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 dark:text-gray-300 py-2 hover:text-teal-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="btn btn-primary w-full justify-center"
            >
              Fale Conosco
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
export default Header;
