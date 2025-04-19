
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import LocationMap from '@/components/LocationMap';

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Contact Header */}
        <section className="bg-gradient-to-r from-sky-50 to-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl mb-6">Contact</h1>
              <p className="text-xl text-gray-700">
                Besoin d'informations ou d'assistance? Notre équipe est à votre disposition pour répondre à toutes vos questions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="heading-md mb-6">Nos coordonnées</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-sao2-blue mb-2">Adresse</h3>
                    <address className="text-gray-700 not-italic">
                      51 Chemin du Refuge<br />
                      06250 Mougins<br />
                      France
                    </address>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-sao2-blue mb-2">Email</h3>
                    <a 
                      href="mailto:octozze@gmail.com" 
                      className="text-gray-700 hover:text-sao2-blue transition-colors"
                    >
                      octozze@gmail.com
                    </a>
                  </div>
                </div>
                
                {/* Map */}
                <div className="mt-10">
                  <h3 className="text-lg font-semibold text-sao2-blue mb-4">Notre localisation</h3>
                  <LocationMap />
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="heading-md mb-6">Envoyez-nous un message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="heading-md text-center mb-8">Horaires d'ouverture</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-sao2-blue mb-4">Jours ouvrables</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Lundi - Vendredi</span>
                      <span className="font-medium">9h00 - 18h00</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-sao2-blue mb-4">Weekend et jours fériés</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Samedi</span>
                      <span className="font-medium">9h00 - 13h00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Dimanche et jours fériés</span>
                      <span className="font-medium">Fermé</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-50 p-4 text-center">
                <p className="text-sao2-blue-dark">
                  Service d'urgence disponible 24/7 pour nos clients sous contrat.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
