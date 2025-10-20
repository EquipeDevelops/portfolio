import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const Cta = () => {
  return (
    <section id="cta" className="relative" style={{ background: "#0f766e" }}>
      {}
      <div className="absolute inset-0 grid-pattern-visible"></div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          {}
          <div className="inline-block p-3 mb-6 bg-white/20 rounded-xl animate-pulse-icon">
            {" "}
            {}
            <Sparkles className="w-8 h-8" />
          </div>

          {}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Pronto para Transformar Sua Ideia em Realidade?
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Vamos criar juntos uma solução digital excepcional que vai levar seu
            negócio para o próximo nível. Comece sua jornada hoje mesmo!
          </p>

          {}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="btn bg-white text-gray-900 font-bold hover:bg-gray-200 text-lg px-8 py-3.5"
              style={{ backgroundColor: "var(--bg-l2)", color: "white" }}
            >
              Iniciar Projeto
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#portfolio"
              className="btn border border-white/50 text-white hover:bg-white/10 text-lg px-8 py-3.5"
            >
              Ver Portfólio
            </a>
          </div>

          {}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
              Sem custos ocultos
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
              Suporte contínuo
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
              Garantia de qualidade
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
