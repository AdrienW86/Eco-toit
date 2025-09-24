"use client"
import { useState } from "react"
import styles from './form.module.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("Envoi en cours...")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      if (res.ok) {
        setStatus("Message envoyé avec succès ✅")
        setFormData({ name: "", email: "", phone: "", message: "" }) // reset form
      } else {
        setStatus("Erreur lors de l’envoi ❌ : " + data.error)
      }
    } catch (err) {
      console.error(err)
      setStatus("Impossible d’envoyer le message ❌")
    }
  }

  return (
   <section className={styles.container}>
    <h1 className={styles.title}> Demandez votre devis gratuit</h1>
     <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "20px auto" }} className={styles.form}>
      <input
        type="text"
        name="name"
        placeholder="Votre nom"
        value={formData.name}
        onChange={handleChange}
        required
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        value={formData.email}
        onChange={handleChange}
        required
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Votre téléphone"
        value={formData.phone}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <textarea
        name="message"
        placeholder="Votre message"
        value={formData.message}
        onChange={handleChange}
        required
        rows="5"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <button type="submit" style={{ padding: "12px 20px", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "5px" }}>
        Envoyer
      </button>

      {status && <p style={{ marginTop: "10px" }}>{status}</p>}
    </form>
    <h2 className={styles.h2}> Localisation </h2>
      <div style={{ width: '100%', height: '0', paddingBottom: '56%', position: 'relative' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.678993682153!2d-1.2728233843829037!3d47.18284867915421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ec3e92d20d45%3A0xe70329081d1b12e9!2s6%20Bis%20Rue%20de%20Bel%20Air%2C%2044330%20Vallet%2C%20France!5e0!3m2!1sfr!2sus!4v1695461223456!5m2!1sfr!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map - Eco toit"
        ></iframe>
      </div>
         <h2 className={styles.h2}>  Zone d'intervention </h2>
            <div className={styles.intervention}>
               
  <p className={styles.p}>Nous intervenons rapidement et efficacement dans toute la région Pays de la Loire et Poitou-Charentes :</p>
  
  <table border="1" cellpadding="10" cellspacing="0">
    <thead>
      <tr>
        <th className={styles.th}>Département</th>
        <th className={styles.th}>Villes principales desservies</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className={styles.region}>Loire-Atlantique (44)</td>
        <td className={styles.td}>Nantes, Saint-Nazaire, Clisson, Saint-Herblain, Rezé, Châteaubriant, Ancenis, Pornic, Saint-Sébastien-sur-Loire, Vertou, La Baule-Escoublac, Guérande, Savenay, Pontchâteau, Orvault, Carquefou, Vallet </td>
      </tr>
      <tr>
        <td className={styles.region}>Vendée (85)</td>
        <td className={styles.td}>La Roche-sur-Yon, Les Sables-d’Olonne, Challans, Fontenay-le-Comte, Montaigu, Pouzauges, Saint-Gilles-Croix-de-Vie, Luçon, Herbiers, Chantonnay, Talmont-Saint-Hilaire, Mareuil-sur-Lay-Dissais</td>
      </tr>
      <tr>
        <td className={styles.region}>Maine-et-Loire (49)</td>
        <td className={styles.td}>Angers, Cholet, Saumur, Segré, Beaupréau, Chemillé, Doué-en-Anjou, Baugé-en-Anjou, Les Ponts-de-Cé, Trélazé, Avrillé, Chalonnes-sur-Loire</td>
      </tr>
      <tr>
        <td className={styles.region}>Deux-Sèvres (79)</td>
        <td className={styles.td}>Niort, Parthenay, Bressuire, Thouars, Cerizay, Airvault, La Mothe-Saint-Héray, Saint-Maixent-l’École, Frontenay-Rohan-Rohan, Coulonges-sur-l’Autize</td>
      </tr>
    </tbody>
  </table>
            </div>
   </section>
  )
}
