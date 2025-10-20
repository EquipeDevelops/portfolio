import React from "react";

const EmailIcon = () => (
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
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
const PhoneIcon = () => (
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
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);
const LocationIcon = () => (
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
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ContactInfoCard = ({ icon: Icon, title, href, text }) => (
  <div className="card group hover:shadow-lg transition-all">
    <div className="p-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-teal-700 to-teal-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
          <Icon />
        </div>
        <div>
          <div className="font-semibold mb-1">{title}</div>
          <a
            href={href}
            className="text-sm hover:text-teal-600 transition-colors"
            style={{ color: "var(--muted-foreground)" }}
          >
            {text}
          </a>
        </div>
      </div>
    </div>
  </div>
);

const SupportCard = () => (
  <div className="bg-gradient-to-br from-teal-700 to-teal-500 text-white rounded-2xl p-6 shadow-2xl relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZHRoPSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')",
      }}
    ></div>
    <div className="relative z-10">
      <svg
        className="w-10 h-10 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
      <h3 className="font-semibold text-lg mb-2">Suporte Rápido</h3>
      <p className="text-sm text-white/90 leading-relaxed">
        Nossa equipe está pronta para responder suas dúvidas em até 24 horas.
      </p>
    </div>
  </div>
);

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Obrigado! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve!"
    );
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--section-bg-dark)" }}
    >
      {}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute -left-32 bottom-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute -right-32 top-1/4 w-96 h-96 bg-sky-500 rounded-full blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span
              className="text-sm font-semibold px-4 py-2 rounded-full bg-teal-500/10"
              style={{ color: "var(--accent)" }}
            >
              Contato
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black dark:from-gray-100 to-gray-700 dark:to-gray-400 bg-clip-text text-transparent">
            Vamos Conversar
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Pronto para transformar sua ideia em realidade? Vamos conversar
            sobre seu próximo projeto
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-xl font-semibold mb-6">
              Informações de Contato
            </h3>
            <ContactInfoCard
              icon={EmailIcon}
              title="Email"
              href="mailto:contato@develops.com.br"
              text="contato@develops.com.br"
            />
            <ContactInfoCard
              icon={PhoneIcon}
              title="Telefone"
              href="tel:+5511999999999"
              text="+55 (11) 9999-9999"
            />
            <ContactInfoCard
              icon={LocationIcon}
              title="Localização"
              href="#"
              text="São Paulo, Brasil"
            />
            <SupportCard />
          </div>

          {}
          <div className="lg:col-span-2">
            <div className="card shadow-xl">
              <div className="p-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Seu nome"
                        className="w-full h-12 px-4 rounded-lg border-2 transition-colors"
                        style={{
                          background: "var(--input-background)",
                          borderColor: "var(--border)",
                        }}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="seu@email.com"
                        className="w-full h-12 px-4 rounded-lg border-2 transition-colors"
                        style={{
                          background: "var(--input-background)",
                          borderColor: "var(--border)",
                        }}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium">
                      Assunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Como podemos ajudar?"
                      className="w-full h-12 px-4 rounded-lg border-2 transition-colors"
                      style={{
                        background: "var(--input-background)",
                        borderColor: "var(--border)",
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      placeholder="Conte-nos sobre seu projeto..."
                      rows="6"
                      className="w-full px-4 py-3 rounded-lg border-2 resize-none transition-colors"
                      style={{
                        background: "var(--input-background)",
                        borderColor: "var(--border)",
                      }}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-full text-lg justify-center"
                  >
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
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
