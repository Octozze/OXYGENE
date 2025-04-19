
import React from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Oxygen, Home, Medkit } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Index = () => {
  // Featured services
  const featuredServices = [
    {
      title: 'Oxygène Médical',
      description: 'Dispensation à domicile d\'oxygène médical pour les patients nécessitant une thérapie respiratoire continue ou temporaire.',
      icon: <Oxygen size={24} />
    },
    {
      title: 'Hospitalisation À Domicile',
      description: 'Services de soutien pour les soins à domicile, permettant aux patients de récupérer dans le confort de leur foyer.',
      icon: <Home size={24} />
    },
    {
      title: 'Matériel Médical',
      description: 'Production, distribution, location et entretien d\'équipements médicaux pour les patients et les professionnels de santé.',
      icon: <Medkit size={24} />
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="heading-lg">
                  Votre partenaire santé <span className="text-gradient">de confiance</span>
                </h2>
                <p className="text-lg text-gray-700">
                  SAO2 Santé est spécialisée dans la fourniture d'oxygène médical et de services de santé à domicile, 
                  offrant aux patients une alternative confortable aux séjours hospitaliers prolongés.
                </p>
                <p className="text-lg text-gray-700">
                  Notre équipe dévouée travaille en étroite collaboration avec les professionnels de la santé pour 
                  garantir des soins de qualité et un suivi personnalisé pour chaque patient.
                </p>
                <Button asChild size="lg" className="bg-sao2-blue hover:bg-sao2-blue-dark">
                  <Link to="/services">En savoir plus sur nos services</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" 
                    alt="Medical professional" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-sao2-blue/10 rounded-full z-0" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-sao2-green/10 rounded-full z-0" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Nos Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SAO2 Santé offre une gamme complète de services pour répondre aux besoins des patients nécessitant des soins à domicile.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <ServiceCard 
                  key={index} 
                  title={service.title} 
                  description={service.description} 
                  icon={service.icon}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link to="/services">Voir tous nos services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-sao2-blue/90 to-sao2-blue-dark/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin d'assistance ou d'informations ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Notre équipe est disponible pour répondre à vos questions et vous aider à trouver les solutions adaptées à vos besoins.
            </p>
            <Button asChild size="lg" variant="outline" className="bg-white text-sao2-blue hover:bg-gray-100">
              <Link to="/contact">Contactez-nous aujourd'hui</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
