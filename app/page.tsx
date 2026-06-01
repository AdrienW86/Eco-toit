// app/page.tsx
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import QuoteForm from "@/components/Form";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Notre bannière principale axée Artisanat, Décennale et Éco */}
      <Hero />
      
      {/* Emplacement pour les sections suivantes (Services, Galerie Photos, Contact...) */}
      <div className="w-full">
        <ServicesGrid />
        <AboutSection />
        <GallerySection />
        <QuoteForm />
        {/* Les autres composants viendront ici */}
      </div>
    </div>
  );
}