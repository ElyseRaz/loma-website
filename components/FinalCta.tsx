"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Status = "idle" | "submitting" | "success" | "error";

export default function FinalCta() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          need: data.get("need"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) throw new Error("request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      className="w-full py-space-xl bg-primary-container text-on-primary relative overflow-hidden"
      id="contact"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary-container/20 blur-[100px] animate-float-slow" />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondary/30 blur-[120px] animate-float-slow"
        style={{ animationDelay: "-3s" }}
      />
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <Reveal className="lg:col-span-6 flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/10 backdrop-blur-md w-max">
              <span className="w-2 h-2 rounded-full bg-secondary-container" />
              <span className="font-label-tag text-label-tag text-secondary-fixed uppercase tracking-widest font-bold">
                Parlons de votre futur projet
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-lg lg:text-headline-xl text-on-primary font-extrabold leading-tight">
              Prêt à transformer votre vision en réalité digitale ?
            </h2>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim leading-relaxed">
              Que vous soyez porteur d&apos;un concept innovant ou une entreprise établie en
              quête d&apos;optimisation radicale, nos experts sont prêts à concevoir votre
              solution sur-mesure.
            </p>
            <div className="flex flex-col gap-space-xs pt-space-xs text-primary-fixed">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-container text-[20px]">
                  schedule
                </span>
                <span className="font-body-sm text-body-sm">
                  Premier rendez-vous découverte de 30 minutes sans engagement
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-container text-[20px]">
                  shield
                </span>
                <span className="font-body-sm text-body-sm">
                  Confidentialité garantie &amp; accords NDA sous 24h
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6">
            <div className="p-space-lg md:p-space-xl rounded-3xl bg-surface-container-lowest text-on-surface shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
              <h3 className="font-headline-sm text-headline-sm font-bold text-primary mb-space-xs">
                Contact direct studio
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Remplissez ce formulaire express pour recevoir un retour sous 24 heures ouvrées.
              </p>
              <form className="flex flex-col gap-space-sm" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                  <div>
                    <label className="block font-label-md text-label-md text-primary font-bold mb-1">
                      Votre Nom &amp; Prénom *
                    </label>
                    <input
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container focus:ring-2 focus:ring-secondary-container/40 transition-all"
                      name="name"
                      placeholder="Jean Dupont"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-primary font-bold mb-1">
                      Votre Email Professionnel *
                    </label>
                    <input
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container focus:ring-2 focus:ring-secondary-container/40 transition-all"
                      name="email"
                      placeholder="jean@entreprise.com"
                      required
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-primary font-bold mb-1">
                    Votre besoin principal
                  </label>
                  <select
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container focus:ring-2 focus:ring-secondary-container/40 transition-all"
                    name="need"
                  >
                    <option value="global">Accompagnement 360° (Design + Web + IA)</option>
                    <option value="web">Développement Web / Mobile</option>
                    <option value="design">Design Graphique &amp; Branding</option>
                    <option value="uiux">UI/UX Design &amp; Prototypage</option>
                    <option value="ia">Automatisation des flux &amp; IA</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-primary font-bold mb-1">
                    Parlez-nous brièvement de votre ambition
                  </label>
                  <textarea
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container focus:ring-2 focus:ring-secondary-container/40 transition-all resize-none"
                    name="message"
                    placeholder="Description sommaire, objectifs, délais souhaités..."
                    rows={3}
                  />
                </div>
                <div
                  className={`p-3 rounded-xl bg-secondary-fixed/40 text-primary font-label-md text-label-md text-center transition-all duration-500 ${
                    status === "success"
                      ? "opacity-100 max-h-24 mt-1"
                      : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
                  }`}
                >
                  ✨ Demande transmise avec succès ! Un directeur de projet vous recontacte
                  d&apos;ici 24h.
                </div>
                <div
                  className={`p-3 rounded-xl bg-error-container text-on-error-container font-label-md text-label-md text-center transition-all duration-500 ${
                    status === "error"
                      ? "opacity-100 max-h-24 mt-1"
                      : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
                  }`}
                >
                  ⚠️ Échec de l&apos;envoi. Merci de réessayer ou de nous écrire directement.
                </div>
                <button
                  className={`w-full py-3.5 px-space-lg rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg transition-all duration-300 shadow-[0_4px_20px_rgba(0,193,253,0.3)] hover:shadow-[0_4px_28px_rgba(0,193,253,0.5)] hover:bg-primary flex items-center justify-center gap-2 mt-space-xs ${
                    status === "submitting" ? "opacity-70 pointer-events-none" : ""
                  }`}
                  disabled={status === "submitting"}
                  type="submit"
                >
                  <span>
                    {status === "submitting" ? "Envoi en cours..." : "Initier la collaboration"}
                  </span>
                  {status !== "submitting" && (
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  )}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
