
import React from 'react';
import { Hospital, Home, BriefcaseMedical, Thermometer, Bed, Ambulance } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Services = () => {
  const servicesList = [
    {
      title: 'Oxygène Médical à Domicile',
      description: 'Fourniture d\'oxygène médical à domicile pour les patients souffrant de maladies respiratoires chroniques ou temporaires. Incluant la mise en place, le suivi et l\'entretien des équipements.',
      icon: <Hospital size={24} />
    },
    {
      title: 'Equipement d\'Hospitalisation à Domicile',
      description: 'Solutions complètes pour permettre aux patients de recevoir des soins médicaux dans le confort de leur domicile, avec tous les équipements nécessaires.',
      icon: <Home size={24} />
    },
    {
      title: 'Matériel Médical Spécialisé',
      description: 'Distribution, location et vente de matériel médical spécialisé pour les besoins spécifiques des patients et des professionnels de la santé.',
      icon: <BriefcaseMedical size={24} />
    },
    {
      title: 'Monitoring et Suivi Patient',
      description: 'Équipements de surveillance des constantes vitales et systèmes de télésuivi pour assurer un contrôle médical régulier à distance.',
      icon: <Thermometer size={24} />
    },
    {
      title: 'Coordination avec les Établissements de Santé',
      description: 'Services de coordination entre les hôpitaux, les médecins et les soins à domicile pour assurer une continuité des soins optimale.',
      icon: <Ambulance size={24} />
    },
    {
      title: 'Équipement de Confort Patient',
      description: 'Solutions adaptées pour améliorer le confort des patients alités ou à mobilité réduite, incluant lits médicalisés et accessoires.',
      icon: <Bed size={24} />
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Services Header */}
        <section className="bg-gradient-to-r from-sky-50 to-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl mb-6">Nos Services</h1>
              <p className="text-xl text-gray-700">
                SAO2 Santé propose une gamme complète de services pour soutenir les patients nécessitant des soins à domicile, 
                avec une spécialisation dans la dispensation d'oxygène médical.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.map((service, index) => (
                <ServiceCard 
                  key={index} 
                  title={service.title} 
                  description={service.description} 
                  icon={service.icon}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="heading-lg mb-6">Dispensation d'Oxygène Médical</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Notre service principal consiste à fournir de l'oxygène médical aux patients qui en ont besoin à leur domicile.
                    L'oxygénothérapie est prescrite pour diverses conditions respiratoires et peut être nécessaire temporairement ou à long terme.
                  </p>
                  <p>
                    Nous prenons en charge toute la chaîne logistique :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Livraison et installation des équipements (concentrateurs, bouteilles)</li>
                    <li>Formation du patient et de son entourage à l'utilisation</li>
                    <li>Maintenance régulière et service d'urgence 24/7</li>
                    <li>Coordination avec les prescripteurs pour le suivi du traitement</li>
                  </ul>
                </div>
              </div>
              <div>
                <h2 className="heading-lg mb-6">Hospitalisation À Domicile</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Nos services d'hospitalisation à domicile permettent aux patients de recevoir des soins médicaux dans un environnement 
                    confortable et familier, tout en bénéficiant d'un niveau de soins professionnels.
                  </p>
                  <p>
                    Nous fournissons :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Équipement médical spécialisé adapté au domicile</li>
                    <li>Systèmes de monitoring et de communication avec les professionnels de santé</li>
                    <li>Coordination des services entre les différentes parties prenantes</li>
                    <li>Solutions personnalisées selon les besoins spécifiques de chaque patient</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Material and Equipment */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="heading-lg text-center mb-12">Notre Matériel Médical</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <div className="flex">
                <div className="shrink-0 mr-6">
                  <div className="w-16 h-16 rounded-full bg-sao2-blue/10 flex items-center justify-center">
                    <Hospital className="w-8 h-8 text-sao2-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Équipement d'Oxygénothérapie</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Concentrateurs d'oxygène fixes et portables</li>
                    <li>• Bouteilles d'oxygène médical de différentes tailles</li>
                    <li>• Systèmes d'administration (lunettes, masques, etc.)</li>
                    <li>• Humidificateurs et accessoires connexes</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex">
                <div className="shrink-0 mr-6">
                  <div className="w-16 h-16 rounded-full bg-sao2-green/10 flex items-center justify-center">
                    <Ambulance className="w-8 h-8 text-sao2-green" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Équipement de Monitoring</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Oxymètres de pouls et moniteurs de saturation</li>
                    <li>• Moniteurs de signes vitaux</li>
                    <li>• Systèmes de télésurveillance</li>
                    <li>• Dispositifs d'alerte médicale</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex">
                <div className="shrink-0 mr-6">
                  <div className="w-16 h-16 rounded-full bg-sao2-blue/10 flex items-center justify-center">
                    <Bed className="w-8 h-8 text-sao2-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Mobilier Médical</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Lits médicalisés et accessoires</li>
                    <li>• Fauteuils de repos et de transfert</li>
                    <li>• Dispositifs d'aide à la mobilité</li>
                    <li>• Équipements adaptés pour la salle de bain</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex">
                <div className="shrink-0 mr-6">
                  <div className="w-16 h-16 rounded-full bg-sao2-green/10 flex items-center justify-center">
                    <BriefcaseMedical className="w-8 h-8 text-sao2-green" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Dispositifs Médicaux Spécialisés</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Équipement pour perfusion</li>
                    <li>• Matériel de soin et de pansement</li>
                    <li>• Systèmes de nutrition entérale</li>
                    <li>• Appareils d'aérosolthérapie</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
