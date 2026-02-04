import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section id="inicio" className="hero">
            <div className="container hero-content centered-hero">
                <div className="hero-text" data-animate="slide-up">
                    <span className="badge-new">🚀 IA de Élite para Emprendedores Chilenos</span>
                    <h1>Tu Pyme, ahora con<br /><span className="gradient-text">superpoderes</span> de <br />Inteligencia Artificial.</h1>
                    <p>En REDPY transformamos los procesos manuales que te quitan tiempo en soluciones automatizadas que generan valor. Tecnología diseñada para la realidad del emprendedor chileno.</p>
                    <div className="cta-group animated-cta">
                        <a href="#contacto" className="btn-primary">Diagnostica tu Pyme Gratis <ArrowRight size={18} /></a>
                        <a href="#servicios" className="btn-secondary">Ver Soluciones</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
