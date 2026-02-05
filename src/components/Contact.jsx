import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contacto" className="contact">
            <div className="container contact-wrapper">
                <div className="contact-info" data-animate="slide-right">
                    <h2>¿Listo para <span className="gradient-text">Evolucionar?</span></h2>
                    <p>Agenda una consultoría gratuita de 15 minutos. Analizaremos tu negocio y te diremos exactamente
                        dónde la IA puede generar valor inmediato.</p>

                    <ul className="contact-list">
                        <li><CheckCircle size={20} /> Auditoría Inicial Gratuita</li>
                        <li><CheckCircle size={20} /> Plan de Implementación a Medida</li>
                        <li><CheckCircle size={20} /> ROI Proyectado</li>
                    </ul>
                </div>

                {/* Form removed as requested */}
            </div>
        </section>
    );
}
