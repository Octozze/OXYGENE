
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-24">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-sao2-blue">404</h1>
            <div className="h-1 w-24 bg-sao2-green mx-auto my-4"></div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Page non trouvée</h2>
          <p className="text-xl text-gray-600 mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Button asChild size="lg" className="bg-sao2-blue hover:bg-sao2-blue-dark">
            <Link to="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
