
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-sky-50 to-white pt-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631815588090-d4bfec5b9696')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="heading-xl mb-4">
            <span className="text-gradient">Oxygène médical</span> et soins à domicile
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            SAO2 Santé est votre partenaire de confiance pour la dispensation d'oxygène médical et les services de santé à domicile dans le sud de la France.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-sao2-blue hover:bg-sao2-blue-dark text-white">
              <Link to="/services">
                Découvrir nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
