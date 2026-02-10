import React from 'react';
import { Link, Code, Rocket } from 'lucide-react';

export default function Process({ openModal }) {
    return (
        <section id="proceso" className="process">
            <div className="container">
                <div className="section-header" data-animate="slide-up">
                    <h2>Nuestro Proceso</h2>
                    <p>De la manualidad a la inteligencia en tres pasos simples.</p>
                </div>

                <div className="process-steps">
                    <div className="process-step-item" data-animate="fade-in" style={{ transitionDelay: '100ms' }}>
                        <div className="step-icon-wrapper">
                            <Link />
                        </div>
                        <div className="step-number">Paso 01</div>
                        <h3>Conexión</h3>
                        <p>Identificamos tus procesos críticos (esos que hoy haces 'a mano'). Entendemos el ADN de tu negocio.</p>
                    </div>

                    <div className="process-step-item" data-animate="fade-in" style={{ transitionDelay: '300ms' }}>
                        <div className="step-icon-wrapper">
                            <Code />
                        </div>
                        <div className="step-number">Paso 02</div>
                        <h3>Desarrollo</h3>
                        <p>Implementamos la herramienta de IA que mejor se adapte a tu presupuesto y meta. Sin complicaciones.</p>
                    </div>

                    <div className="process-step-item" data-animate="fade-in" style={{ transitionDelay: '500ms' }}>
                        <div className="step-icon-wrapper">
                            <Rocket />
                        </div>
                        <div className="step-number">Paso 03</div>
                        <h3>Optimización</h3>
                        <p>Liberamos tu tiempo para que te enfoques en lo que realmente importa: hacer crecer tu negocio.</p>
                    </div>
                </div>

                <div className="process-cta-box" data-animate="scale-up">
                    <h3>¿Listo/a para empezar tu transformación?</h3>
                    <p>No esperes a que la competencia automatice antes que tú.</p>
                    <a href="#contacto" className="btn-primary btn-large" onClick={(e) => { e.preventDefault(); openModal(); }}>Agenda una Asesoría Gratuita</a>
                </div>
            </div>
        </section>
    );
}
