import React from "react";

const HeroLogo = () => (
  <svg
    viewBox="0 0 100 100"
    className="logo-svg w-32 h-32 mx-auto group-hover:scale-110 transition-transform duration-300"
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

const SparkleIcon = () => (
  <svg
    className="w-8 h-8 text-teal-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

const LightningIcon = () => (
  <svg
    className="w-8 h-8 text-teal-700"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-700 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500 opacity-20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-teal-700/5 via-transparent to-teal-500/5 rounded-full blur-2xl"></div>
        <div className="absolute inset-0 grid-pattern"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <HeroLogo />
              <div className="absolute -top-2 -right-2 animate-bounce">
                <SparkleIcon />
              </div>
              <div className="absolute -bottom-2 -left-2 animate-pulse">
                <LightningIcon />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-teal-700 via-teal-500 to-teal-700 bg-clip-text text-transparent animate-gradient">
            DEVELOPS
          </h1>

          <p
            className="text-2xl md:text-3xl font-semibold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            Construindo Soluções Digitais
          </p>

          <p
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Transformamos suas ideias em experiências digitais de alto impacto.
            Especializados em sistemas personalizados, landing pages otimizadas
            e serviços completos de desenvolvimento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#portfolio" className="btn btn-primary text-lg">
              Ver Nosso Trabalho
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            <a href="#services" className="btn btn-outline text-lg">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              Nossos Serviços
            </a>
          </div>

          {}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-20 max-w-3xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-700/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div
                className="relative rounded-2xl p-4 md:p-6 border-2"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-br from-teal-700 to-teal-500 bg-clip-text text-transparent mb-2">
                  100+
                </div>
                <div
                  className="text-xs md:text-sm"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Projetos Entregues
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-teal-700/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div
                className="relative rounded-2xl p-4 md:p-6 border-2"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-br from-teal-500 to-teal-700 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div
                  className="text-xs md:text-sm"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Clientes Satisfeitos
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-700/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div
                className="relative rounded-2xl p-4 md:p-6 border-2"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-br from-teal-700 to-teal-500 bg-clip-text text-transparent mb-2">
                  5+
                </div>
                <div
                  className="text-xs md:text-sm"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Anos de Experiência
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
