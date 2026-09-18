import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function serviceLabel(service: string) {
  const services: Record<string, string> = {
    couverture: "Travaux de couverture / Toiture",
    zinguerie: "Zinguerie & Gouttières",
    nettoyage: "Nettoyage & Démoussage Toiture",
    peinture: "Peinture de toiture isolante",
    facades: "Rénovation & Ravalement Façade",
    maconnerie: "Petite maçonnerie de toiture",
    "Demande depuis la page contact": "Demande depuis la page contact",
  };

  return services[service] || service || "Non renseignée";
}

function urgencyLabel(urgency: string) {
  const urgencies: Record<string, string> = {
    normal: "Projet à moyen terme",
    urgent: "Urgent — Infiltration / Fuite suspectée",
    immediat: "Dès que possible / Sinistre",
    "Non précisée": "Non précisée",
  };

  return urgencies[urgency] || urgency || "Non précisée";
}

function infoRow(label: string, value: string) {
  return `
    <tr>
      <td
        style="
          padding:14px 0;
          border-bottom:1px solid #e2e8f0;
          font-family:Arial,Helvetica,sans-serif;
          font-size:13px;
          color:#64748b;
          width:38%;
        "
      >
        ${label}
      </td>

      <td
        style="
          padding:14px 0;
          border-bottom:1px solid #e2e8f0;
          font-family:Arial,Helvetica,sans-serif;
          font-size:14px;
          font-weight:700;
          color:#0f172a;
        "
      >
        ${value}
      </td>
    </tr>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone = "",
      postalCode = "",
      city = "",
      service = "",
      urgency = "",
      description = "",
      website = "",
    } = body;

    // Honeypot anti-spam
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email) {
      return NextResponse.json(
        { error: "Nom et adresse email obligatoires." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY manquante");
    }

    if (!process.env.CONTACT_EMAIL) {
      throw new Error("CONTACT_EMAIL manquante");
    }

    if (!process.env.RESEND_FROM_EMAIL) {
      throw new Error("RESEND_FROM_EMAIL manquante");
    }

    const rawEmail = String(email).trim();
    const rawPhone = String(phone).trim();

    const safe = {
      name: escapeHtml(String(name)),
      email: escapeHtml(rawEmail),
      phone: escapeHtml(rawPhone),
      postalCode: escapeHtml(String(postalCode)),
      city: escapeHtml(String(city)),
      service: escapeHtml(serviceLabel(String(service))),
      urgency: escapeHtml(urgencyLabel(String(urgency))),
      description: escapeHtml(String(description)),
    };

    const mailtoLink = `mailto:${encodeURIComponent(
      rawEmail
    )}?subject=${encodeURIComponent(
      `Re: Votre demande de devis — Éco Couverture`
    )}`;

    const phoneLink = rawPhone
      ? `tel:${rawPhone.replace(/[^\d+]/g, "")}`
      : "";

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.CONTACT_EMAIL,
      replyTo: rawEmail,

      subject: `🏠 Nouvelle demande de devis — ${safe.name}`,

      html: `
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Nouvelle demande de devis</title>
  </head>

  <body
    style="
      margin:0;
      padding:0;
      background-color:#f1f5f9;
      font-family:Arial,Helvetica,sans-serif;
      color:#0f172a;
    "
  >

    <!-- Fond -->
    <table
      role="presentation"
      width="100%"
      cellspacing="0"
      cellpadding="0"
      border="0"
      style="background-color:#f1f5f9;"
    >
      <tr>
        <td align="center" style="padding:32px 12px;">

          <!-- Conteneur -->
          <table
            role="presentation"
            width="100%"
            cellspacing="0"
            cellpadding="0"
            border="0"
            style="
              max-width:680px;
              background:#ffffff;
              border-radius:20px;
              overflow:hidden;
              border:1px solid #e2e8f0;
            "
          >

            <!-- LOGO / MARQUE -->
            <tr>
              <td
                style="
                  padding:28px 32px;
                  background:#ffffff;
                "
              >
                <table
                  role="presentation"
                  width="100%"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                >
                  <tr>
                    <td>
                      <div
                        style="
                          font-size:22px;
                          line-height:26px;
                          font-weight:900;
                          color:#0f172a;
                          letter-spacing:-0.5px;
                        "
                      >
                        <span style="color:#16a34a;">ÉCO</span>
                        COUVERTURE
                      </div>

                      <div
                        style="
                          margin-top:5px;
                          font-size:10px;
                          line-height:15px;
                          font-weight:700;
                          color:#94a3b8;
                          letter-spacing:2px;
                          text-transform:uppercase;
                        "
                      >
                        Toiture · Rénovation · Entretien
                      </div>
                    </td>

                    <td
                      align="right"
                      style="
                        font-size:11px;
                        line-height:17px;
                        color:#64748b;
                        font-weight:700;
                      "
                    >
                      Demande reçue<br>
                      depuis le site internet
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- BANDEAU VERT -->
            <tr>
              <td
                style="
                  padding:36px 32px;
                  background:#166534;
                "
              >
                <div
                  style="
                    font-size:11px;
                    font-weight:800;
                    letter-spacing:2px;
                    text-transform:uppercase;
                    color:#86efac;
                    margin-bottom:10px;
                  "
                >
                  NOUVEAU PROSPECT
                </div>

                <div
                  style="
                    font-size:30px;
                    line-height:36px;
                    font-weight:900;
                    color:#ffffff;
                    letter-spacing:-0.8px;
                  "
                >
                  Nouvelle demande de devis
                </div>

                <div
                  style="
                    margin-top:10px;
                    font-size:15px;
                    line-height:23px;
                    color:#dcfce7;
                  "
                >
                  Une nouvelle demande vient d'être envoyée depuis
                  le site Éco Couverture.
                </div>
              </td>
            </tr>

            <!-- CONTENU -->
            <tr>
              <td style="padding:32px;">

                <!-- CLIENT -->
                <table
                  role="presentation"
                  width="100%"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                >
                  <tr>
                    <td>
                      <div
                        style="
                          font-size:19px;
                          font-weight:900;
                          color:#0f172a;
                        "
                      >
                        Informations du client
                      </div>

                      <div
                        style="
                          margin-top:5px;
                          font-size:13px;
                          color:#94a3b8;
                        "
                      >
                        Coordonnées fournies via le formulaire
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- TABLE INFORMATIONS -->
                <table
                  role="presentation"
                  width="100%"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  style="
                    margin-top:20px;
                    border-top:1px solid #e2e8f0;
                  "
                >

                  ${infoRow("Nom", safe.name)}

                  ${infoRow(
                    "Email",
                    `<a
                      href="mailto:${rawEmail}"
                      style="
                        color:#16a34a;
                        text-decoration:none;
                        font-weight:700;
                      "
                    >${safe.email}</a>`
                  )}

                  ${infoRow(
                    "Téléphone",
                    rawPhone
                      ? `<a
                          href="${phoneLink}"
                          style="
                            color:#0f172a;
                            text-decoration:none;
                            font-weight:700;
                          "
                        >${safe.phone}</a>`
                      : "Non renseigné"
                  )}

                  ${infoRow(
                    "Ville",
                    safe.city || "Non renseignée"
                  )}

                  ${infoRow(
                    "Code postal",
                    safe.postalCode || "Non renseigné"
                  )}

                  ${infoRow(
                    "Prestation",
                    safe.service
                  )}

                  ${infoRow(
                    "Niveau d'urgence",
                    safe.urgency
                  )}

                </table>

                <!-- ESPACEMENT -->
                <div style="height:32px;"></div>

                <!-- DESCRIPTION -->
                <table
                  role="presentation"
                  width="100%"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                >
                  <tr>
                    <td>
                      <div
                        style="
                          font-size:19px;
                          font-weight:900;
                          color:#0f172a;
                        "
                      >
                        Description du projet
                      </div>

                      <div
                        style="
                          margin-top:5px;
                          font-size:13px;
                          color:#94a3b8;
                        "
                      >
                        Message envoyé par le client
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding-top:16px;">
                      <div
                        style="
                          padding:22px;
                          background:#f8fafc;
                          border:1px solid #e2e8f0;
                          border-radius:14px;
                          font-size:15px;
                          line-height:24px;
                          color:#334155;
                          white-space:pre-wrap;
                        "
                      >${safe.description || "Aucune description fournie."}</div>
                    </td>
                  </tr>
                </table>

                <!-- ESPACEMENT -->
                <div style="height:28px;"></div>

                <!-- ACTIONS -->
                <table
                  role="presentation"
                  width="100%"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                >
                  <tr>
                    <td
                      style="
                        padding:22px;
                        background:#f0fdf4;
                        border:1px solid #bbf7d0;
                        border-radius:14px;
                      "
                    >
                      <div
                        style="
                          font-size:16px;
                          font-weight:900;
                          color:#166534;
                          margin-bottom:6px;
                        "
                      >
                        Répondre au client
                      </div>

                      <div
                        style="
                          font-size:13px;
                          line-height:20px;
                          color:#64748b;
                          margin-bottom:18px;
                        "
                      >
                        Utilisez les boutons ci-dessous pour contacter
                        directement ${safe.name}.
                      </div>

                      <!-- Bouton email -->
                      <a
                        href="${mailtoLink}"
                        style="
                          display:inline-block;
                          background:#16a34a;
                          color:#ffffff;
                          text-decoration:none;
                          font-size:13px;
                          font-weight:800;
                          padding:13px 20px;
                          border-radius:10px;
                          margin-right:8px;
                          margin-bottom:8px;
                        "
                      >
                        Répondre par email
                      </a>

                      ${
                        rawPhone
                          ? `
                            <a
                              href="${phoneLink}"
                              style="
                                display:inline-block;
                                background:#ffffff;
                                color:#166534;
                                text-decoration:none;
                                font-size:13px;
                                font-weight:800;
                                padding:12px 20px;
                                border-radius:10px;
                                border:1px solid #86efac;
                                margin-bottom:8px;
                              "
                            >
                              Appeler le client
                            </a>
                          `
                          : ""
                      }

                    </td>
                  </tr>
                </table>

              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td
                align="center"
                style="
                  padding:24px 32px;
                  background:#f8fafc;
                  border-top:1px solid #e2e8f0;
                "
              >
                <div
                  style="
                    font-size:13px;
                    font-weight:800;
                    color:#334155;
                  "
                >
                  Éco Couverture
                </div>

                <div
                  style="
                    margin-top:5px;
                    font-size:11px;
                    line-height:17px;
                    color:#94a3b8;
                  "
                >
                  Cette demande a été envoyée automatiquement
                  depuis votre formulaire de contact.
                </div>
              </td>
            </tr>

          </table>

          <!-- Petit footer externe -->
          <div
            style="
              max-width:680px;
              padding:18px 10px 0;
              font-family:Arial,Helvetica,sans-serif;
              font-size:10px;
              line-height:16px;
              color:#94a3b8;
              text-align:center;
            "
          >
            Éco Couverture · Notification automatique du site internet
          </div>

        </td>
      </tr>
    </table>

  </body>
</html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Impossible d’envoyer la demande." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Une erreur est survenue." },
      { status: 500 }
    );
  }
}