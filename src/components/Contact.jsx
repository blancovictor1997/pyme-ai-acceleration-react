import React from 'react';
import { CheckCircle, Send } from 'lucide-react';

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

                <form className="glass-form" data-animate="slide-left" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" placeholder="Tu nombre" />
                    </div>
                    <div className="form-group">
                        <label>Empresa</label>
                        <input type="text" placeholder="Nombre de tu Pyme" />
                    </div>
                    <div className="form-group">
                        <label>Correo Electrónico</label>
                        <input type="email" placeholder="tucorreo@empresa.com" />
                    </div>
                    <div className="form-group">
                        <label>Interés Principal</label>
                        <select>
                            <option>Automatización</option>
                            <option>Asistentes Virtuales</option>
                            <option>Analytics</option>
                            <option>Otro</option>
                        </select>
                    </div>
                    <button type="submit" className="btn-submit">Solicitar Auditoría <Send size={18} /></button>
                </form>
            </div>
        </section>
    );
}
