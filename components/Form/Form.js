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
     <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0px auto" }} className={styles.form}>
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
      <button type="submit" className={styles.btn}>
        Envoyer
      </button>
      {status && <p style={{ marginTop: "10px" }}>{status}</p>}
    </form>
   </section>
  )
}
