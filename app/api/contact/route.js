import nodemailer from "nodemailer"

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Demande de devis" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "Nouvelle demande de devis",
      html: `
        <h2>Nouvelle demande de devis</h2>
        <p><b>Nom :</b> ${name}</p>
        <p><b>Email :</b> ${email}</p>
        <p><b>Téléphone :</b> ${phone}</p>
        <p><b>Message :</b> ${message}</p>
      `,
    })

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (err) {
    console.error("Erreur envoi email:", err)
    return new Response(JSON.stringify({ error: "Échec envoi email" }), { status: 500 })
  }
}
