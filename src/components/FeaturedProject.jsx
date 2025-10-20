import React from "react";
import {
  CheckCircle2,
  Settings2,
  Mail,
  MessageSquare,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";
import projectImage from "../assets/cristovao.png";

const project = {
  image: projectImage,
  tag: "Landing Page & Sistema",
  title: "Landing Page para Advogado",
  description:
    "Desenvolvimento de landing page profissional para escritório de advocacia com sistema integrado de captação de leads. Implementamos formulário de contato com envio automatizado por email e integração direta com WhatsApp para atendimento rápido.",
  features: [
    "Design responsivo e moderno",
    "Sistema de envio de email automatizado",
    "Integração com Whatsapp Business",
    "Formulário de contato otimizado",
    "SEO otimizado para advocacia",
    "Animações suaves e profissionais",
  ],
  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Email Integration",
    "WhatsApp API",
  ],
  highlights: [
    { icon: Mail, text: "Email Integration" },
    { icon: MessageSquare, text: "WhatsApp Business" },
    { icon: Smartphone, text: "Responsivo" },
  ],
};

const ProjectCta = () => (
  <div className="max-w-4xl mx-auto mt-24">
    <div
      className="card p-8 md:p-12 text-center"
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      <h3 className="text-3xl md:text-4xl font-bold mb-4">
        Seu Projeto Pode Ser o Próximo
      </h3>
      <p
        className="text-lg max-w-2xl mx-auto"
        style={{ color: "var(--muted-foreground)" }}
      >
        Estamos prontos para transformar sua ideia em realidade com as melhores
        tecnologias e práticas do mercado
      </p>
      <a href="#contact" className="btn btn-primary mt-8 text-lg">
        Iniciar Novo Projeto
        <ArrowUpRight className="w-5 h-5" />
      </a>
    </div>
  </div>
);

const FeaturedProject = () => {
  return (
    <section id="featured-project" className="py-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span
              className="text-sm font-semibold px-4 py-2 rounded-full"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--background)",
              }}
            >
              Projetos Realizados
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 dark:from-gray-100 to-gray-600 dark:to-gray-400 bg-clip-text text-transparent">
            Nosso Último Projeto
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Conheça o projeto mais recente que desenvolvemos com excelência e
            dedicação
          </p>
        </div>

        <div
          className="card p-6 md:p-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="relative">
            <span
              className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full z-10"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--background)",
              }}
            >
              {project.tag}
            </span>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-bold">{project.title}</h3>
            <p style={{ color: "var(--muted-foreground)" }}>
              {project.description}
            </p>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2
                  className="w-5 h-5"
                  style={{ color: "var(--accent)" }}
                />
                Principais Funcionalidades
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "var(--accent)" }}
                    ></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Settings2
                  className="w-5 h-5"
                  style={{ color: "var(--accent)" }}
                />
                Tecnologias Utilizadas
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs border rounded"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="flex flex-wrap gap-4 pt-4 border-t"
              style={{ borderColor: "var(--border)" }}
            >
              {project.highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    <Icon
                      className="w-4 h-4"
                      style={{ color: "var(--accent)" }}
                    />
                    {item.text}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {}
        <ProjectCta />
      </div>
    </section>
  );
};

export default FeaturedProject;
