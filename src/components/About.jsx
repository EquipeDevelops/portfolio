import React from "react";

const FocusIcon = () => (
  <svg
    className="w-7 h-7 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const TeamIcon = () => (
  <svg
    className="w-7 h-7 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const AgilityIcon = () => (
  <svg
    className="w-7 h-7 text-white"
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

const QualityIcon = () => (
  <svg
    className="w-7 h-7 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
);

const cardData = [
  {
    icon: FocusIcon,
    title: "Foco em Resultados",
    description:
      "Desenvolvemos soluções orientadas a alcançar seus objetivos de negócio com métricas claras de sucesso.",
  },
  {
    icon: TeamIcon,
    title: "Time Especializado",
    description:
      "Equipe experiente e dedicada, pronta para transformar desafios em oportunidades digitais.",
  },
  {
    icon: AgilityIcon,
    title: "Agilidade",
    description:
      "Metodologias ágeis para entregas rápidas sem comprometer a qualidade do produto final.",
  },
  {
    icon: QualityIcon,
    title: "Qualidade Premium",
    description:
      "Código limpo, boas práticas e tecnologias modernas em cada projeto que desenvolvemos.",
  },
];

const AboutCard = ({ icon: Icon, title, description }) => (
  <div className="card group hover:shadow-2xl transition-all relative">
    <div className="absolute inset-0 bg-gradient-to-br from-teal-700/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
    <div className="p-6 relative z-10">
      {}
      <div className="w-14 h-14 bg-gradient-to-br from-teal-700 to-teal-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
        <Icon />
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--muted-foreground)" }}
      >
        {description}
      </p>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-700/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span
              className="text-sm font-semibold px-4 py-2 rounded-full bg-teal-700/10"
              style={{ color: "var(--primary)" }}
            >
              Sobre Nós
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 dark:from-gray-100 to-gray-600 dark:to-gray-400 bg-clip-text text-transparent">
            Quem Somos
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            A DEVELOPS é uma startup especializada em criar soluções digitais
            inovadoras. Com paixão por tecnologia e design, desenvolvemos
            sistemas robustos, landing pages de alta conversão e oferecemos
            serviços completos de desenvolvimento web.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <AboutCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
