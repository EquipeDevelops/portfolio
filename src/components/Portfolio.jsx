import React from "react";

const CodeIcon = () => (
  <svg
    className="w-20 h-20 text-white/90 group-hover:scale-110 transition-transform drop-shadow-2xl"
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

const projectData = [
  {
    category: "Sistema",
    title: "Sistema de Gestão Empresarial",
    description:
      "Plataforma completa de ERP com módulos de vendas, estoque, financeiro e relatórios analíticos.",
    techTags: ["React", "Node.js", "PostgreSQL", "Dashboard"],
    gradientClass: "from-blue-500 to-cyan-500",
  },
  {
    category: "Sistema",
    title: "E-commerce de Moda",
    description:
      "Loja virtual moderna com catálogo de produtos, carrinho de compras e checkout integrado.",
    techTags: ["Next.js", "Stripe", "E-commerce", "CMS"],
    gradientClass: "from-purple-500 to-pink-500",
  },
  {
    category: "Landing Page",
    title: "Landing Page - Tech Startup",
    description:
      "Página de conversão para startup de tecnologia com design minimalista e animações suaves.",
    techTags: ["React", "Tailwind", "SEO", "Analytics"],
    gradientClass: "from-teal-700 to-teal-500",
  },
  {
    category: "Sistema",
    title: "App de Gestão de Tarefas",
    description:
      "Aplicação web para gerenciamento de projetos e tarefas com colaboração em tempo real.",
    techTags: ["React", "Firebase", "Real-time", "PWA"],
    gradientClass: "from-orange-500 to-red-500",
  },
  {
    category: "Landing Page",
    title: "Landing Page - Imobiliária",
    description:
      "Site institucional para imobiliária com busca avançada de imóveis e tour virtual 360°.",
    techTags: ["Next.js", "Maps API", "SEO", "Responsive"],
    gradientClass: "from-green-500 to-emerald-500",
  },
  {
    category: "Sistema",
    title: "Dashboard Financeiro",
    description:
      "Painel administrativo para controle financeiro com gráficos interativos e relatórios.",
    techTags: ["React", "Charts", "API", "Analytics"],
    gradientClass: "from-indigo-500 to-purple-500",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="card group hover:shadow-2xl transition-all duration-300">
      <div
        className={`h-56 bg-gradient-to-br ${project.gradientClass} relative overflow-hidden`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <CodeIcon />
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/90 text-gray-900 rounded-full text-sm font-medium shadow-lg">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 group-hover:text-teal-600 transition-colors">
          {project.title}
        </h3>
        <p
          className="text-base mb-4"
          style={{ color: "var(--muted-foreground)" }}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techTags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 border rounded text-xs"
              style={{ borderColor: "var(--primary)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span
              className="text-sm font-semibold px-4 py-2 rounded-full bg-teal-700/10"
              style={{ color: "var(--primary)" }}
            >
              Portfólio
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 dark:from-gray-100 to-gray-600 dark:to-gray-400 bg-clip-text text-transparent">
            Nossos Projetos
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Conheça alguns dos projetos que desenvolvemos com excelência e
            dedicação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
