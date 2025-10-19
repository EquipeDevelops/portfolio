import React from "react";

const CustomSystemsIcon = () => (
  <svg
    className="w-8 h-8 text-white"
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
);

const LandingPageIcon = () => (
  <svg
    className="w-8 h-8 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
    />
  </svg>
);

const DevServicesIcon = () => (
  <svg
    className="w-8 h-8 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ReactNextIcon = () => <CustomSystemsIcon />;
const NodeApiIcon = () => (
  <svg
    className="w-6 h-6 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
    />
  </svg>
);
const MobileFirstIcon = () => (
  <svg
    className="w-6 h-6 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);
const UiUxIcon = () => (
  <svg
    className="w-6 h-6 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    />
  </svg>
);

const serviceData = [
  {
    icon: CustomSystemsIcon,
    title: "Sistemas Personalizados",
    description:
      "Desenvolvemos sistemas web completos sob medida para seu negócio, com arquitetura escalável e segura.",
    features: [
      "Aplicações Web Complexas",
      "Dashboards Administrativos",
      "APIs RESTful",
      "Integrações com Terceiros",
    ],
  },
  {
    icon: LandingPageIcon,
    title: "Landing Pages",
    description:
      "Páginas de alta conversão com design moderno, otimizadas para SEO e performance máxima.",
    features: [
      "Design Responsivo",
      "Otimização SEO",
      "Formulários Integrados",
      "Analytics & Tracking",
    ],
  },
  {
    icon: DevServicesIcon,
    title: "Serviços de Desenvolvimento",
    description:
      "Serviços completos de desenvolvimento web, desde a concepção até a implantação e manutenção.",
    features: [
      "Consultoria Técnica",
      "Manutenção & Suporte",
      "Deploy & DevOps",
      "Testes de Qualidade",
    ],
  },
];

const techData = [
  { icon: ReactNextIcon, name: "React & Next.js" },
  { icon: NodeApiIcon, name: "Node.js & APIs" },
  { icon: MobileFirstIcon, name: "Mobile First" },
  { icon: UiUxIcon, name: "UI/UX Design" },
];

const ServiceCard = ({ icon: Icon, title, description, features }) => (
  <div className="card group hover:shadow-2xl transition-all">
    <div className="p-6">
      <div className="w-16 h-16 bg-gradient-to-br from-teal-700 to-teal-700/80 rounded-2xl flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 transition-transform">
        <Icon />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p
        className="text-base mb-4"
        style={{ color: "var(--muted-foreground)" }}
      >
        {description}
      </p>
      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-700 to-teal-500"></div>
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TechnologyCard = ({ icon: Icon, name }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-br from-teal-700/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
    <div className="card relative flex flex-col items-center gap-4 p-8 group-hover:shadow-xl transition-all">
      <div className="w-12 h-12 bg-gradient-to-br from-teal-700 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
        <Icon />
      </div>
      <span className="text-sm font-medium text-center">{name}</span>
    </div>
  </div>
);

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--muted)" }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-teal-700 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-teal-500 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span
              className="text-sm font-semibold px-4 py-2 rounded-full bg-teal-500/10"
              style={{ color: "var(--accent)" }}
            >
              Serviços
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 dark:from-gray-100 to-gray-600 dark:to-gray-400 bg-clip-text text-transparent">
            O Que Fazemos
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Oferecemos soluções completas em desenvolvimento web para
            transformar sua visão em realidade digital
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {serviceData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10">
            Tecnologias que Dominamos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techData.map((tech, index) => (
              <TechnologyCard key={index} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
