import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ openModal }) {
    return (
        <section id="inicio" className="hero">
            <div className="container hero-content centered-hero">
                <div className="hero-text" data-animate="slide-up">
                    <span className="badge-new">🚀 IA de Élite para Emprendedores Chilenos</span>
                    <h1>Tu Pyme, ahora con<br /><span className="gradient-text">superpoderes</span> de <br />Inteligencia Artificial.</h1>
                    <p>En REDPY transformamos los procesos manuales que te quitan tiempo en soluciones automatizadas que generan valor. Tecnología diseñada para la realidad del emprendedor chileno.</p>
                    <div className="cta-group animated-cta">
                        <a href="#contacto" className="btn-primary" onClick={(e) => { e.preventDefault(); openModal(); }}>Diagnostica tu Pyme Gratis <ArrowRight size={18} /></a>
                        <a href="#servicios" className="btn-secondary">Ver Soluciones</a>
                    </div>

                    <div className="hero-image-container" style={{ marginTop: '4rem', width: '100%', maxWidth: '1000px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                            alt="Dashboard Inteligencia de Negocios"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
