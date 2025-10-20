import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um projeto?",
    answer:
      "O prazo varia de acordo com a complexidade do projeto. Uma landing page simples pode ser entregue em 1-2 semanas, enquanto sistemas mais complexos podem levar de 1 a 3 meses. Fornecemos um cronograma detalhado após a análise inicial do seu projeto.",
  },
  {
    question: "Vocês oferecem manutenção e suporte após a entrega?",
    answer:
      "Sim! Oferecemos planos de manutenção e suporte contínuo para garantir que seu sistema funcione perfeitamente. Incluímos atualizações, correções de bugs, monitoramento e suporte técnico de acordo com o plano escolhido.",
  },
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer:
      "Trabalhamos com metodologia ágil em 4 etapas principais: 1) Planejamento e análise de requisitos, 2) Design e prototipação, 3) Desenvolvimento e testes, 4) Lançamento e treinamento. Você acompanha todo o processo e pode sugerir ajustes em cada etapa.",
  },
  {
    question: "Quais tecnologias vocês utilizam?",
    answer:
      "Utilizamos tecnologias modernas e consolidadas no mercado, como React, Next.js para front-end, Node.js e Java para back-end, além de bancos de dados como PostgreSQL e MongoDB. Escolhemos a stack ideal para cada projeto.",
  },
  {
    question: "O site será responsivo e funcionará em dispositivos móveis?",
    answer:
      "Absolutamente! Todos os nossos projetos são desenvolvidos com design responsivo, garantindo uma experiência perfeita em smartphones, tablets e desktops. Testamos em diversos dispositivos antes da entrega.",
  },
  {
    question: "Vocês trabalham com e-commerce?",
    answer:
      "Sim! Desenvolvemos lojas virtuais completas com carrinho de compras, gestão de produtos, integrações de pagamento, painel administrativo e todas as funcionalidades necessárias para seu negócio online.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Trabalhamos com parcelamento do projeto, geralmente dividido em: sinal inicial (30-40%), parcela intermediária após aprovação do design/protótipo (30%), e pagamento final na entrega (30-40%). Aceitamos diversas formas de pagamento.",
  },
  {
    question: "Vocês fazem integração com outros sistemas?",
    answer:
      "Sim! Temos experiência em integrar sistemas com APIs de terceiros, ERPs, CRMs, gateways de pagamento, sistemas de gestão e diversas outras plataformas. Desenvolvemos também APIs personalizadas para seu projeto.",
  },
];

const FaqItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border-b" style={{ borderColor: "var(--border)" }}>
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left py-5 px-6"
      >
        <span className="flex items-center gap-4">
          <HelpCircle
            className="w-5 h-5 shrink-0"
            style={{ color: "var(--accent)" }}
          />
          <span className="font-semibold">{faq.question}</span>
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="pb-5 px-6">
          <p
            className="pl-9 text-sm"
            style={{ color: "var(--muted-foreground)" }}
          >
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24">
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
              FAQ
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 dark:from-gray-100 to-gray-600 dark:to-gray-400 bg-clip-text text-transparent">
            Perguntas Frequentes
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Tire suas dúvidas sobre nossos serviços e processo de trabalho
          </p>
        </div>

        <div className="max-w-3xl mx-auto card p-0">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        <div
          className="max-w-3xl mx-auto mt-12 text-center p-8 rounded-2xl"
          style={{ backgroundColor: "var(--bg-l)" }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Não encontrou sua resposta?
          </h3>
          <p className="text-white/90 mb-6">
            Entre em contato conosco e teremos prazer em esclarecer todas as
            suas dúvidas.
          </p>
          <a
            href="#contact"
            className="btn bg-white text-gray-900 font-bold hover:bg-gray-200"
            style={{ backgroundColor: "var(--bg-l2)", color: "white" }}
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
