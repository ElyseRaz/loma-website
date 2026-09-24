import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const NEEDS: Record<string, string> = {
  global: "Accompagnement 360° (Design + Web + IA)",
  web: "Développement Web / Mobile",
  design: "Design Graphique & Branding",
  uiux: "UI/UX Design & Prototypage",
  ia: "Automatisation des flux & IA",
};

export async function POST(request: NextRequest) {
  const { name, email, need, message } = await request.json();

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    !name.trim() ||
    !email.trim()
  ) {
    return NextResponse.json(
      { error: "Le nom et l'email sont requis." },
      { status: 400 },
    );
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    console.error("GMAIL_USER / GMAIL_APP_PASSWORD ne sont pas configurés.");
    return NextResponse.json(
      { error: "Le service d'envoi n'est pas configuré." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Site LOMA Studio" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `Nouvelle demande de contact — ${name}`,
      text: [
        `Nom : ${name}`,
        `Email : ${email}`,
        `Besoin : ${NEEDS[need] ?? need ?? "Non précisé"}`,
        "",
        message?.trim() || "(Aucun message)",
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Échec de l'envoi de l'email de contact:", error);
    return NextResponse.json(
      { error: "Échec de l'envoi. Merci de réessayer." },
      { status: 502 },
    );
  }
}
