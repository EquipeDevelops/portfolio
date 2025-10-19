import React from "react";

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

const socialLinks = [
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer
      className="border-t-2 relative overflow-hidden"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-700/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Logo />
              <span className="text-xl font-bold bg-gradient-to-r from-teal-700 via-teal-500 to-teal-700 bg-clip-text text-transparent">
                DEVELOPS
              </span>
            </div>
            <p
              className="mb-8 max-w-sm leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              Construindo Soluções Digitais de alto impacto para transformar seu
              negócio.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-700/10 to-teal-500/10 flex items-center justify-center hover:from-teal-700 hover:to-teal-500 hover:text-white transition-all hover:scale-110 shadow-sm"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {}
          <div>
            <h3 className="font-semibold text-lg mb-6">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="hover:text-teal-600 transition-colors inline-flex items-center gap-2 group"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <span className="w-0 h-0.5 bg-teal-700 group-hover:w-4 transition-all"></span>
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-teal-600 transition-colors inline-flex items-center gap-2 group"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <span className="w-0 h-0.5 bg-teal-700 group-hover:w-4 transition-all"></span>
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-teal-600 transition-colors inline-flex items-center gap-2 group"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <span className="w-0 h-0.5 bg-teal-700 group-hover:w-4 transition-all"></span>
                  Portfólio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-teal-600 transition-colors inline-flex items-center gap-2 group"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <span className="w-0 h-0.5 bg-teal-700 group-hover:w-4 transition-all"></span>
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {}
          <div>
            <h3 className="font-semibold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="hover:text-teal-600 transition-colors inline-flex items-center gap-2 group"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <span className="w-0 h-0.5 bg-teal-700 group-hover:w-4 transition-all"></span>
                  Sistemas Web
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-teal-600 transition-colors inline-flex items-center gap-2 group"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <span className="w-0 h-0.5 bg-teal-700 group-hover:w-4 transition-all"></span>
                  Landing Pages
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-teal-600 transition-colors inline-flex items-center gap-2 group"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <span className="w-0 h-0.5 bg-teal-700 group-hover:w-4 transition-all"></span>
                  Consultoria
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-teal-600 transition-colors inline-flex items-center gap-2 group"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <span className="w-0 h-0.5 bg-teal-700 group-hover:w-4 transition-all"></span>
                  Manutenção
                </a>
              </li>
            </ul>
          </div>

          {}
          <div>
            <h3 className="font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-teal-600 transition-colors inline-flex items-center gap-2 group"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <span className="w-0 h-0.5 bg-teal-700 group-hover:w-4 transition-all"></span>
                  Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-600 transition-colors inline-flex items-center gap-2 group"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <span className="w-0 h-0.5 bg-teal-700 group-hover:w-4 transition-all"></span>
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-600 transition-colors inline-flex items-center gap-2 group"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <span className="w-0 h-0.5 bg-teal-700 group-hover:w-4 transition-all"></span>
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t-2 pt-8"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              © {new Date().getFullYear()} DEVELOPS. Todos os direitos
              reservados.
            </p>
            <p
              className="text-sm flex items-center gap-2"
              style={{ color: "var(--muted-foreground)" }}
            >
              Desenvolvido com{" "}
              <span className="text-teal-600 text-lg animate-pulse">♥</span>{" "}
              pela equipe DEVELOPS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
