"use client"


import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: "accueil", label: "Accueil", bg: "bg-green-50" },
    { id: "photos", label: "Photos" },
    { id: "couverture", label: "Travaux de couverture", bg: "bg-gray-50" },
    { id: "facades", label: "Rénovation de façades" },
    { id: "zinguerie", label: "Zinguerie", bg: "bg-gray-50" },
    { id: "maconnerie", label: "Petite maçonnerie" },
    { id: "peinture", label: "Peinture de toiture isolante", bg: "bg-gray-50" },
    { id: "nettoyage", label: "Nettoyage de toiture et façades" },
    { id: "contact", label: "Contact", bg: "bg-green-50" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Eco Toit" className="h-12" />
            <span className="font-bold text-xl text-green-700">ECO TOIT</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4 font-medium">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    className="hover:text-green-600 transition-colors"
                  >
                    {sec.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-green-700 focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="bg-green-50 md:hidden p-4">
            <ul className="flex flex-col space-y-2 font-medium">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="block hover:text-green-600 transition-colors"
                  >
                    {sec.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Sections */}
      <main>
        {/* Accueil */}
        <motion.section
          id="accueil"
          className="py-20 bg-green-50 text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold text-green-700">
            Bienvenue chez Eco Toit
          </h1>
          <p className="mt-4 text-lg">
            Votre artisan engagé pour vos toitures, façades et plus encore.
          </p>
        </motion.section>

        {/* Photos */}
        <motion.section
          id="photos"
          className="py-20 container mx-auto text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-green-700">
            Nos Réalisations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <img src="/photo1.jpg" alt="chantier 1" className="rounded-xl shadow" />
            <img src="/photo2.jpg" alt="chantier 2" className="rounded-xl shadow" />
            <img src="/photo3.jpg" alt="chantier 3" className="rounded-xl shadow" />
          </div>
        </motion.section>

        {/* Autres sections */}
        {sections
          .filter((sec) => sec.id !== "accueil" && sec.id !== "photos")
          .map((sec) => (
            <motion.section
              key={sec.id}
              id={sec.id}
              className={`py-20 text-center ${sec.bg || ""}`}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold text-green-700">
                {sec.label}
              </h2>
              <p className="mt-4 max-w-2xl mx-auto">
                {sec.id === "couverture" &&
                  "Nous assurons la pose, l’entretien et la réparation de toitures pour protéger durablement votre maison."}
                {sec.id === "facades" &&
                  "Redonnez une nouvelle vie à vos façades avec nos solutions adaptées."}
                {sec.id === "zinguerie" &&
                  "Pose et entretien de gouttières et éléments métalliques pour un toit fonctionnel et esthétique."}
                {sec.id === "maconnerie" &&
                  "Nous réalisons vos petits travaux de maçonnerie liés à la toiture et aux façades."}
                {sec.id === "peinture" &&
                  "Protégez et isolez votre toit grâce à notre peinture isolante innovante."}
                {sec.id === "nettoyage" &&
                  "Un entretien régulier pour prolonger la durée de vie et la beauté de vos extérieurs."}
                {sec.id === "contact" && (
                  <>
                    📞 06 12 34 56 78 <br /> ✉️ contact@ecotoit.fr
                    <br />
                    <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition">
                      Demander un devis
                    </button>
                  </>
                )}
              </p>
            </motion.section>
          ))}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 Eco Toit - Artisan Engagé. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
