import React from "react";
import { Lightbulb, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Planejamento",
    description:
      "Entendemos suas necessidades e objetivos para criar a estratégia ideal para seu projeto.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description:
      "Criamos interfaces modernas e intuitivas, focadas na melhor experiência do usuário.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code2,
    number: "03",
    title: "Desenvolvimento",
    description:
      "Transformamos o design em código limpo e eficiente, utilizando as melhores tecnologias.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Lançamento",
    description:
      "Realizamos testes rigorosos e colocamos seu projeto no ar com suporte contínuo.",
    color: "from-orange-500 to-red-500",
  },
];

const StepCard = ({ step }) => {
  const Icon = step.icon;
  return (
    <div className="card group relative overflow-hidden text-center md:text-left">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      ></div>
      <div className="p-6 relative">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-4">
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${step.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>
          <span className="text-5xl font-bold text-foreground/20 mt-4 md:mt-0">
            {" "}
            {}
            {step.number}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          {step.description}
        </p>
      </div>
    </div>
  );
};

const Process = () => {
  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span
              className="text-sm font-semibold px-4 py-2 rounded-full"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--background)",
              }}
            >
              Processo
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 dark:from-gray-100 to-gray-600 dark:to-gray-400 bg-clip-text text-transparent">
            Como Trabalhamos
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Nosso processo de desenvolvimento é estruturado e transparente,
            garantindo resultados excepcionais
          </p>
        </div>

        {}
        <div className="relative">
          <div className="hidden md:block absolute top-7 left-0 w-full h-px bg-border -z-1"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <div
            className="card p-6 text-center"
            style={{ backgroundColor: "var(--card)" }}
          >
            <p style={{ color: "var(--muted-foreground)" }}>
              <strong style={{ color: "var(--foreground)" }}>
                Metodologia Ágil:
              </strong>{" "}
              Trabalhamos com sprints e entregas parciais, garantindo que você
              acompanhe o desenvolvimento e possa sugerir ajustes ao longo do
              processo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
